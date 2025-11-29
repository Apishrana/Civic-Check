
# Civic-Check Backend

**Civic-Check** is an AI-powered misinformation detection platform that identifies fake news, retrieves credible evidence, and generates reliability scores. This backend handles scraping, model training, inference, and API endpoints for frontend consumption.

---

## Table of Contents

- [Features](#features)  
- [Architecture](#architecture)  
- [Models](#models)  
- [Installation](#installation)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
- [Data & Training](#data--training)  
- [License](#license)

---

## Features

- Real-time fact-checking for news and user-submitted text  
- Transformer-based text classification (RoBERTa-based)  
- Image classification using ResNet34 for image-based verification  
- Multi-source evidence retrieval (SERPAPI + fallback search)  
- Automated scraping and fine-tuning pipelines  
- Reliability scoring (0–100)  
- Caching and scheduler for fast and updated responses  

---

## Architecture

1. **Text Model** – RoBERTa fine-tuned on multi-source fake news datasets.  
2. **Image Model** – ResNet34 trained on curated labeled image datasets.  
3. **Scraper & Dataset Pipelines** – Collects articles from real and fake sources, fetches images, extracts summaries, sentiment, and reliability.  
4. **Scheduler** – Automatically triggers scraping and retraining every 10 minutes.  
5. **Semantic Evidence Engine** – Uses SERPAPI + sentence-transformers or TF-IDF fallback to find top 3 supporting evidence items.  
6. **FastAPI Backend** – Serves prediction and update endpoints.  

---

## Models

### Text Classification Model

- **Location:** `./trained_model/news_model`  
- **Type:** Transformer-based (RoBERTa)  
- **Labels:** Real (0) / Fake (1)  
- **Link to Download:** [Google Drive / HuggingFace link placeholder]  

### Image Classification Model

- **Location:** `./image_model`  
- **Type:** ResNet34 with augmentation  
- **Labels:** Real (0) / Fake (1)  
- **Link to Download:** [Google Drive / HuggingFace link placeholder]  

> ⚠️ Ensure model directories exist and contain `pytorch_model.bin`, `full_model.pt`, and tokenizer files.

---

## Installation

```bash
# Clone repo
git clone https://github.com/Apishrana/Civic-Check.git
cd Civic-Check/Backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install --upgrade pip
pip install -r requirements.txt

# Set environment variables
export SERPAPI_API_KEY="your_serpapi_key"
export RUN_SCHEDULER=1
```

---

## Usage

### Start FastAPI server

```bash
uvicorn app:app --host 0.0.0.0 --port 8000
```

- Scheduler will start automatically (fetches news, retrains models).  
- ModelManager preloads available models.  

---

## API Endpoints

| Endpoint             | Method | Description |
|---------------------|--------|-------------|
| `/predict`          | POST   | Predict label, confidence, and retrieve top 3 evidence items. |
| `/update`           | POST   | Trigger scraping and fine-tuning pipeline manually. |
| `/ai`               | POST   | Generate AI-based prediction for prompt. |
| `/health`           | GET    | Health check. Returns `{"status": "ok"}` |

**Example `/predict` request:**

```json
POST /predict
{
    "text": "NASA discovers water on Mars."
}
```

**Example `/predict` response:**

```json
{
  "label": 0,
  "confidence": 0.92,
  "probs": [0.92, 0.08],
  "evidence": [
    {"title": "...", "url": "...", "snippet": "..."},
    {"title": "...", "url": "...", "snippet": "..."},
    {"title": "...", "url": "...", "snippet": "..."}
  ]
}
```

---

## Data & Training

### Dataset Sources

- FakeNewsNet, LIAR, Kaggle Fake News  
- PolitiFact, Snopes, and curated Indian news data  

### Training Scripts

- **Text model:** `train_transformer(train_csv='train_full.csv', out_dir='./trained_model/news_model')`  
- **Image model:** `train_image_model(train_csv='train_full.csv', img_dir='train_images', out_dir='./image_model')`  

### Features

- Layerwise Learning Rate Decay (LLRD)  
- Exponential Moving Average (EMA)  
- Fast Gradient Method (FGM) adversarial training  
- Focal loss with class weights  
- Automatic cleanup of old models  

---

## License

MIT License © 2025 Divyanshu Prakash  
