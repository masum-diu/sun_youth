import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Avatar,
  Grid,
  Stepper,
  Step,
  StepLabel,
  LinearProgress,
} from "@mui/material";

const avatars = [
  "https://i.pravatar.cc/100?img=1",
  "https://i.pravatar.cc/100?img=2",
  "https://i.pravatar.cc/100?img=3",
  "https://i.pravatar.cc/100?img=4",
];

const questions = [
  {
    q: "Which of these foods is the healthiest daily choice? / নিচের কোন খাবারটি দৈনন্দিন খাওয়ার জন্য সবচেয়ে স্বাস্থ্যকর?",
    options: ["Candy", "Fried chips", "Fresh fruits", "Soft drinks"],
    answer: 2,
  },
  {
    q: "Why do our bodies need food? / আমাদের শরীরের কেন খাবার প্রয়োজন?",
    options: [
      "To feel full",
      "To get energy and stay healthy",
      "To waste money",
      "To look good",
    ],
    answer: 1,
  },
  {
    q: "Which habit helps protect the environment? / কোন অভ্যাসটি পরিবেশ রক্ষা করে?",
    options: [
      "Burning plastic",
      "Throwing waste in rivers",
      "Recycling waste",
      "Wasting water",
    ],
    answer: 2,
  },
  {
    q: "What is a food system? / খাদ্য ব্যবস্থা কী?",
    options: [
      "Only cooking",
      "The journey of food from farm to plate",
      "Only shopping",
      "Only eating",
    ],
    answer: 1,
  },
];

export default function QuizApp() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(avatars[0]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const handleNext = () => {
    if (step < questions.length + 1) setStep(step + 1);
  };

  const handleAnswer = (index) => {
    setAnswers({ ...answers, [step - 1]: index });
  };

  const finishQuiz = () => {
    let s = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) s++;
    });
    setScore(s);
    handleNext();
  };

  return (
    <Box >
      <Card >
        <CardContent>
          <Typography variant="h5" fontWeight={600} textAlign="center" mb={2}>
            Food, Climate, Nutrition & Health Quiz
          </Typography>

          <Stepper activeStep={step} alternativeLabel>
            <Step>
              <StepLabel>Profile</StepLabel>
            </Step>
            {questions.map((_, i) => (
              <Step key={i}>
                <StepLabel>Q{i + 1}</StepLabel>
              </Step>
            ))}
            <Step>
              <StepLabel>Result</StepLabel>
            </Step>
          </Stepper>

          <LinearProgress
            sx={{ my: 2 }}
            variant="determinate"
            value={(step / (questions.length + 1)) * 100}
          />

          {step === 0 && (
            <Box>
              <TextField
                fullWidth
                label="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ mb: 2 }}
              />

              <Typography variant="subtitle1" mb={1}>
                Choose Your Avatar
              </Typography>
              <Grid container spacing={2}>
                {avatars.map((a) => (
                  <Grid item key={a}>
                    <Avatar
                      src={a}
                      sx={{
                        width: 64,
                        height: 64,
                        border: avatar === a ? "3px solid #1976d2" : "none",
                        cursor: "pointer",
                      }}
                      onClick={() => setAvatar(a)}
                    />
                  </Grid>
                ))}
              </Grid>

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
                disabled={!name}
                onClick={handleNext}
              >
                Start Quiz
              </Button>
            </Box>
          )}

          {step > 0 && step <= questions.length && (
            <Box>
              <Typography variant="h6" mb={2}>
                {questions[step - 1].q}
              </Typography>
              <RadioGroup
                value={answers[step - 1] ?? ""}
                onChange={(e) => handleAnswer(Number(e.target.value))}
              >
                {questions[step - 1].options.map((opt, i) => (
                  <FormControlLabel
                    key={i}
                    value={i}
                    control={<Radio />}
                    label={opt}
                  />
                ))}
              </RadioGroup>

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
                onClick={step === questions.length ? finishQuiz : handleNext}
                disabled={answers[step - 1] === undefined}
              >
                {step === questions.length ? "Finish Quiz" : "Next"}
              </Button>
            </Box>
          )}

          {step === questions.length + 1 && (
            <Box textAlign="center">
              <Avatar
                src={avatar}
                sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
              />
              <Typography variant="h6">Congratulations {name} 🎉</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                You scored {score} out of {questions.length}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Certificate Eligible
              </Typography>

              <Button variant="outlined" sx={{ mt: 3 }}>
                Download Certificate (Coming Soon)
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
