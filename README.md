# Feedback API

A robust RESTful API for managing and analyzing user feedback with AI-powered summarization capabilities.

## �� Features

- **CRUD Operations**: Create, read, update feedback entries
- **Status Management**: Track feedback status (pending, resolved, archived)
- **AI Summarization**: Automatically summarize feedback using Groq AI
- **Authentication**: API key-based authentication for secure access
- **CORS Support**: Configured for cross-origin requests
- **Error Handling**: Comprehensive error handling and validation

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **AI Integration**: LangChain with Groq AI
- **Authentication**: API Key middleware
- **CORS**: Cross-Origin Resource Sharing support

## 📦 Dependencies

- `express`: Web framework
- `cors`: Cross-origin resource sharing
- `dotenv`: Environment variable management
- `@langchain/core`: LangChain core functionality
- `@langchain/groq`: Groq AI integration

## ��️ Project Structure

```
feedback-api/
├── app.js                 # Express app configuration
├── server.js             # Server entry point
├── package.json          # Project dependencies
├── Controllers/
│   └── feedbackController.js  # Request handlers
├── middleware/
│   └── auth.js           # API key authentication
├── models/
│   └── feedbackModel.js  # Data model and operations
├── routes/
│   └── feedbackRoutes.js # API route definitions
└── summarizeFeedback.js  # AI summarization logic
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Groq API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd feedback-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
API_KEY=your_api_key_here
GROQ_API_KEY=your_groq_api_key_here
```

4. Start the server:
```bash
node server.js
```

The server will start on `http://localhost:3000`

##  API Endpoints

### Base URL
```
http://localhost:3000/feedbacks
```

### Authentication
All endpoints require an API key in the request header:
```
x-api-key: your_api_key_here
```

### Endpoints

#### 1. Get All Feedbacks
```http
GET /feedbacks
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Alice",
    "email": "alice@example.com",
    "message": "Great app!",
    "status": "pending"
  }
]
```

#### 2. Add New Feedback
```http
POST /feedbacks/add
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "This is my feedback message"
}
```

**Response:**
```json
{
  "message": "Feedback submitted",
  "feedback": {
    "id": 6,
    "name": "John Doe",
    "email": "john@example.com",
    "message": "This is my feedback message",
    "status": "pending"
  }
}
```

#### 3. Update Feedback Status
```http
PATCH /feedbacks/:id/status
Content-Type: application/json

{
  "status": "resolved"
}
```

**Valid status values:** `pending`, `resolved`, `archived`

**Response:**
```json
{
  "message": "Status updated",
  "feedback": {
    "id": 1,
    "name": "Alice",
    "email": "alice@example.com",
    "message": "Great app!",
    "status": "resolved"
  }
}
```

#### 4. Get Feedback Summary (AI-Powered)
```http
POST /feedbacks/summary
Content-Type: application/json

{
  "feedback": "This is a long feedback message that needs to be summarized..."
}
```

**Response:**
```json
"User expresses satisfaction with the application's performance and user interface."
```

##  Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port number | No (default: 3000) |
| `API_KEY` | API key for authentication | Yes |
| `GROQ_API_KEY` | Groq AI API key for summarization | Yes |

### CORS Configuration

The API is configured to allow requests from:
- `https://feedback-viewer.netlify.app`
- `http://localhost:3000`

## 🔒 Security

- **API Key Authentication**: All endpoints require a valid API key
- **CORS Protection**: Configured to allow only specific origins
- **Input Validation**: Request data is validated before processing
- **Error Handling**: Comprehensive error responses without exposing sensitive information

## 🤖 AI Integration

The API integrates with Groq AI using LangChain for intelligent feedback summarization:

- **Model**: llama-3.1-8b-instant
- **Function**: Converts long feedback messages into concise, accurate summaries
- **Processing**: Asynchronous processing with error handling

## 📝 Data Model

### Feedback Object
```json
{
  "id": "number",
  "name": "string",
  "email": "string", 
  "message": "string",
  "status": "pending | resolved | archived"
}
```

## 🚨 Error Handling

The API returns appropriate HTTP status codes and error messages:

- `400`: Bad Request (invalid input)
- `401`: Unauthorized (invalid API key)
- `404`: Not Found (feedback not found)
- `500`: Internal Server Error

##  Testing

Currently, no automated tests are configured. To test the API:

1. Use tools like Postman or curl
2. Ensure you have valid API keys
3. Test all endpoints with various scenarios

## 📄 License

ISC License

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions, please open an issue in the repository.

---

**Note**: This API is designed to work with a frontend application deployed at `https://feedback-viewer.netlify.app`. 