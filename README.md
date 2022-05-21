# Air University Admission Chatbot Deployment with Flask and JavaScript

In this tutorial we deploy the chatbot I created in [this](https://github.com/python-engineer/pytorch-chatbot) tutorial with Flask and JavaScript.
- I'll Deploy within Flask app with jinja2 template


## Initial Setup:

This repo currently contains the starter files.

Clone repo and create a virtual environment

```
$ git clone https://github.com/python-engineer/chatbot-deployment.git
$ cd chatbot-deployment
$ python3 -m venv venv
$ . venv/bin/activate
```

Install dependencies

```
$ (venv) pip install Flask torch torchvision nltk
```

Install nltk package

```
$ (venv) python
>>> import nltk
>>> nltk.download('punkt')
```

Modify `intents.json` with different intents and responses for your Chatbot

Run

```
$ (venv) python train.py
```

This will dump data.pth file. And then run
the following command to test it in the console.

```
$ (venv) python chat.py
```

## Note

jinja2 templates will be used within Flask app. Only slight modifications are needed to run the frontend separately.
