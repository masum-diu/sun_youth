import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useMemo } from "react";
import theme from "@/utils/theme";

const Quizzes = ({ homePageData }) => {
  const quizData = useMemo(() => {
    if (homePageData?.quizSection?.[0]) {
      const quiz = homePageData.quizSection[0];
      return {
        image: quiz.image?.node?.sourceUrl || "/assets/femle.png",
        title: quiz.title || "Test Your Knowledge!",
        description:
          quiz.description ||
          "Engage with our interactive quizzes to learn more about nutrition and youth development.",
        buttonText: quiz.button?.title || "Take a Quiz",
        buttonUrl:
          quiz.button?.url || "https://quiz-point-client.vercel.app/quizzes",
        buttonTarget: quiz.button?.target || "_blank",
      };
    }
    // Fallback data
    return {
      image: "/assets/femle.png",
      title: "Test Your Knowledge!",
      description:
        "Engage with our interactive quizzes to learn more about nutrition and youth development.",
      buttonText: "Take a Quiz",
      buttonUrl: "https://quiz-point-client.vercel.app/quizzes",
      buttonTarget: "_blank",
    };
  }, [homePageData]);

  return (
    <Box sx={{ pb: 8, width: "95%", margin: "0 auto", maxWidth: "1700px" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: 500,
          my: 6,
          textTransform: "capitalize",
          fontSize: 40,
          color: "#B20933",
        }}
      >
        Quizzes
      </Typography>

      <Grid container bgcolor="#B20933" alignItems="stretch">
        <Grid size={{ xs: 12, sm: 6, md: 6 }} sx={{ display: "flex" }}>
          <img
            src={quizData.image}
            alt={quizData.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Grid>

        <Grid
          size={{ xs: 12, sm: 6, md: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#B20933",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, color: "#fff", mb: 2 }}
          >
            {quizData.title}
          </Typography>

          <Typography variant="body1" sx={{ color: "#fff", mb: 3 }}>
            {quizData.description}
          </Typography>

          <Button
            variant="contained"
            onClick={() =>
              window.open(quizData.buttonUrl, quizData.buttonTarget)
            }
            sx={{
              backgroundColor: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: "#d4701c",
              },
              py: 1.5,
              px: 4,
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            {quizData.buttonText}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Quizzes;
