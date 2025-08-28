
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import torch
import torchvision.transforms as transforms
from torchvision import models
import io

app = Flask(__name__)
CORS(app) 
# ===== MODEL SETUP =====
DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")
MODEL_PATH = "C:/Users/DELL/Desktop/New folder (2)/acne_detection-main/ml-backend/skin_disssss_model.pth"

NUM_CLASSES = 9  
class_names = [
    'BA-Cellulitis',
    'BA-Impetigo',
    'FU-Athlete-Foot',
    'FU-Nail-Fungus',
    'FU-Ringworm',
    'PA-Cutaneous-Larva-Migrans',
    'VI-Chickenpox',
    'VI-Shingles',
    'No-disease'  
]


# Load model
model = models.resnet50(pretrained=False)
model.fc = torch.nn.Linear(model.fc.in_features, NUM_CLASSES)
model.load_state_dict(torch.load(MODEL_PATH, map_location=DEVICE))
model.to(DEVICE)
model.eval()

# Image transform
transform = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406],
                         [0.229, 0.224, 0.225])
])

# ===== ROUTE: ANALYZE IMAGE =====
@app.route('/analyze', methods=['POST'])
def analyze():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400

    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        image = Image.open(io.BytesIO(file.read())).convert("RGB")
        input_tensor = transform(image).unsqueeze(0).to(DEVICE)

        with torch.no_grad():
            outputs = model(input_tensor)
            probabilities = torch.nn.functional.softmax(outputs, dim=1)[0]
            confidence, predicted = torch.max(probabilities, 0)
            predicted_class = class_names[predicted.item()]
            confidence = confidence.item()

        # Optional: Threshold to detect uncertain predictions (e.g. random or unrelated images)
        if confidence < 0.5:
            return jsonify({
                'prediction': "Uncertain / No Disease",
                'confidence': round(confidence, 4)
            })

        return jsonify({
            'prediction': predicted_class.replace( ' ','-'),
            'confidence': round(confidence, 4)
        })

    except Exception as e:
        return jsonify({'error': f'Failed to analyze image: {str(e)}'}), 500



# ===== RUN APP =====
if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)
    # print("✅ Flask API is running at http://127.0.0.1:5000")
    # app.run(debug=True, port=5000)
 






