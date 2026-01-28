import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useRouter } from "next/router";
import ConstructionIcon from "@mui/icons-material/Construction";
import NextLink from "next/link";

function NewsBlogsPage() {
  // Placeholder data for impact stories
  const stories = [
    {
      title: "From Campus Conversations to Global Advocacy",
      excerpt:
        "From Campus Conversations to Global Advocacy: Al-Amin’s Journey in Transforming Food Systems",
      image: "/assets/al-amin/AL AMIN.JPG",
      lang: "en",
      link: "/impact-stories/6",
    },
    {
      title: "Bringing Smiles Through Food",
      excerpt:
        "Bringing Smiles Through Food: A Journey with the ‘Tiffiner Hashi’ Project",
      image: "/assets/sayeda/1.jpg",
      lang: "bn",
      link: "/impact-stories/7",
    },
    {
      title: "Pusti Bondhu",
      excerpt:
        "Pusti Bondhu: A Youth-Led Initiative to Improve Campus Nutrition",
      image: "/assets/soyed/author.jpg",
      lang: "bn",
      link: "/impact-stories/8",
    },
    {
      title: "From Courtyard to Community Change",
      excerpt:
        "From Courtyard to Community Change: A Youth-led Nutrition Movement in Rural Bangladesh",
      image: "/assets/imran-rabby/author.jpg",
      lang: "en",
      link: "/impact-stories/9",
    },
    {
      title: "কলোস্ট্রাম: শিশুর জীবনের প্রথম সোনালী ঘণ্টা",
      excerpt:
        "শিশু জন্মের পর মায়ের বুক থেকে যে ঘন হলুদ রঙের দুধ বের হয় সেটিই কলোস্ট্রাম। একে অনেকে বলেন “লিকুইড গোল্ড”। এটি শিশুর জন্য প্রথম টিকা, যা জীবনের শুরুতেই রোগ প্রতিরোধ ক্ষমতা তৈরি করে।",
      image: "/assets/blogs-cover/1.png",
      lang: "bn",
      link: "/resources/news-blogs/1",
    },
    {
      title:
        "ইমিউনিটি বাড়াতে খাবারে কী রাখবেন?রোগ প্রতিরোধে দৈনন্দিন পুষ্টির সঠিক গাইড",
      excerpt:
        "ঘন ঘন সর্দি-কাশি, সংক্রমণ, দীর্ঘস্থায়ী ক্লান্তি ও ধীরে ক্ষত শুকানো ইত্যাদি দূর্বল রোগ প্রতিরোধ ক্ষমতা হওয়ার লক্ষণ। আমাদের শরীরের প্রতিরোধ ক্ষমতার মূল শক্তি হল সঠিক ও স্পুষ্টিকর খাবার। রোগ প্রতিরোধক্ষমতা বৃদ্ধিকারী খাবারে রয়েছে প্রয়োজনীয় পুষ্টি ও অ্যান্টিঅক্সিডেন্ট, যা শরীরকে অসুস্থতা ও সংক্রমণের বিরুদ্ধে লড়াই করতে সহায়তা করে।",
      image: "/assets/blogs-cover/2.png",
      lang: "bn",
      link: "/resources/news-blogs/2",
    },
    {
      title: "ওজন কমাতে কোন কার্বোহাইড্রেট খাবেন আর কোনগুলো এড়িয়ে চলবেন?",
      excerpt:
        "ওজন কমানোর কথা ভাবলেই প্রথমেই যে জিনিসটা মাথায় আসে, তা হলো কার্বোহাইড্রেট। আমাদের শরীরের প্রধান শক্তির উৎসই হলো কার্বোহাইড্রেট। এখন অনেকেই ভুল খাবার বেছে নেওয়ার কারণে ওজন কমাতে পারেন না। কেউ কেউ আবার মনে করেন কার্বোহাইড্রেট মানেই ওজন বাড়ে তাই পুরোপুরি বাদ দিয়ে দেন। কিন্তু বাস্তবে সব কার্বোহাইড্রেট খারাপ নয়। সঠিক কার্বোহাইড্রেট বেছে নিলে শরীর শক্তি, পুষ্টি আর ওজন নিয়ন্ত্রণ সবই ঠিকমতো পায়।",
      image: "/assets/blogs-cover/3.png",
      lang: "bn",
      link: "/resources/news-blogs/3",
    },
    {
      title:
        "উল্টাপাল্টা ডায়েট নয়- সতর্ক হোন সোশ‍্যাল মিডিয়ার ভাইরাল নিউট্রিশন ট্রেন্ড নিয়ে।",
      excerpt:
        "প্রিয় পাঠক, খেয়াল করলে দেখবেন আপনার আশেপাশে উপরোক্ত ৩টি ঘটনা প্রতিদিন প্রতিনিয়তই ঘটছে, আপাতদৃষ্টিতে স্বাভাবিক মনে হলেও দীর্ঘমেয়াদী ক্ষতিকর প্রভাবের কথা কেউ একবারের জন‍্যও ভাবেন কি? পুষ্টিবিজ্ঞানের দৃষ্টিতে যদি একটু ব‍্যাখা করি, আমাদের দেহের উচ্চতা, ওজন, শারীরিক অবস্থা, দিনে আমরা কতটুকু পরিশ্রম করি, জীবন‍যাপন এমনকি আমাদের লিঙ্গভেদেও ডায়েট চার্ট আলাদা, কখনোই এক রকম হবে না।",
      image: "/assets/blogs-cover/4.png",
      lang: "bn",
      link: "/resources/news-blogs/4",
    },
    {
      title:
        "শিশুর মস্তিষ্কের বিকাশে খাদ্য: কোন কোন পুষ্টি সবচেয়ে গুরুত্বপূর্ণ?",
      excerpt:
        "জন্মের পর প্রথম ৬ মাস বাচ্চাকে শুধু বুকের দুধ খাওয়ানোর পর থেকে বাড়তি খাবার দিতে বলা হয়, কিন্তু সেই বাড়তি খাবার দিতে বাঁধে বিপত্তি। কারণ যে খাবারগুলো দেওয়া হচ্ছে সেগুলো আদৌ বাচ্চার মস্তিষ্কের বিকাশে প্রয়োজনীয় পুষ্টি দিচ্ছে কি না তা নিয়ে অনেকেই অনিশ্চিত। সবচেয়ে গুরুত্বপূর্ণ প্রশ্ন হলো—কোন কোন পুষ্টি শিশুর মস্তিষ্কের জন্য সত্যিই অপরিহার্য?",
      image: "/assets/blogs-cover/5.png",
      lang: "bn",
      link: "/resources/news-blogs/5",
    },
    {
      title:
        "জাঙ্ক ফুডের প্রতি আসক্তি কমাতে খাদ্যাভ্যাসে আনা উচিত ৭টি পরিবর্তন",
      excerpt:
        "দুপুরের খাবার পেট ভরে খাওয়ার পরও চিপস, চকলেট বা বার্গার-পিৎজার প্রতি টান অনুভব করছেন? অনেকের ক্ষেত্রেই জাঙ্ক ফুড এখন নিয়মিত খাবারে পরিণত হয়েছে। আকর্ষণীয় ও মুখরোচক হলেও এসব খাবার শরীরের জন্য ক্ষতিকর। এই লেখায় জাঙ্ক ফুডের আসক্তি কমাতে বাস্তবসম্মত খাদ্যাভ্যাস পরিবর্তনের কথা তুলে ধরা হয়েছে।",
      image: "/assets/blogs-cover/6.png",
      lang: "bn",
      link: "/resources/news-blogs/6",
    },
    {
      title: "গ্যাস্ট্রিক ও অম্বলের সমস্যা? জেনে নিন খাদ্যভিত্তিক সহজ সমাধান",
      excerpt:
        "ভাজাপোড়া বা মসলাযুক্ত খাবার খাওয়ার পর বুকে জ্বালাপোড়া, পেট ফাঁপা বা অস্বস্তি অনুভব করছেন? এগুলো গ্যাস্ট্রিক ও অম্বলের সাধারণ লক্ষণ। অনেকেই জানেন না যে দৈনন্দিন খাদ্যাভ্যাসই এই সমস্যার মূল কারণ হতে পারে। সঠিক খাবার বেছে নিলে এই সমস্যা অনেকটাই নিয়ন্ত্রণে রাখা সম্ভব।",
      image: "/assets/blogs-cover/7.png",
      lang: "bn",
      link: "/resources/news-blogs/7",
    },
    {
      title: "ডিটক্স ডায়েট: বিজ্ঞান নাকি প্রতারণা?",
      excerpt:
        "ডিটক্স চা ও স্লিমিং জুসের জনপ্রিয়তা বাড়লেও বিশেষজ্ঞরা বলছেন, এসব ডায়েটের বৈজ্ঞানিক ভিত্তি খুবই দুর্বল। আমরা কি সত্যিই শরীরকে পরিষ্কার করছি, নাকি শুধু একটি জনপ্রিয় মিথের পেছনে অর্থ ব্যয় করছি? এই লেখায় ডিটক্স ডায়েটের বাস্তবতা ও বৈজ্ঞানিক সত্য তুলে ধরা হয়েছে।",
      image: "/assets/blogs-cover/8.png",
      lang: "bn",
      link: "/resources/news-blogs/8",
    },
    {
      title: "মিষ্টির নেশা: চিনি আসক্তি এবং কীভাবে এটি থেকে মুক্তি পাবেন",
      excerpt:
        "চিনি শুধু একটি খাদ্য উপাদান নয়—এটি আসক্তি তৈরি করতে পারে। অতিরিক্ত চিনি খাওয়ার ফলে স্বাস্থ্যের উপর দীর্ঘমেয়াদি নেতিবাচক প্রভাব পড়ে। এই লেখায় চিনি আসক্তির কারণ, স্বাস্থ্যঝুঁকি এবং তা নিয়ন্ত্রণে আনার কার্যকর উপায় আলোচনা করা হয়েছে।",
      image: "/assets/blogs-cover/9.png",
      lang: "bn",
      link: "/resources/news-blogs/9",
    },
    {
      title:
        "অন্ত্র-মস্তিষ্কের সংযোগ: ডায়েট কীভাবে মানসিক স্বাস্থ্যকে প্রভাবিত করে",
      excerpt:
        "‘খাবার যেমন, মনও তেমন’—এই কথার পেছনে রয়েছে বৈজ্ঞানিক ব্যাখ্যা। অন্ত্র ও মস্তিষ্কের মধ্যে একটি গভীর সম্পর্ক রয়েছে, যা আমাদের মানসিক স্বাস্থ্যে বড় ভূমিকা রাখে। গবেষণায় দেখা গেছে, স্বাস্থ্যকর অন্ত্র মানসিক সুস্থতাও নিশ্চিত করতে পারে।",
      image: "/assets/blogs-cover/10.png",
      lang: "bn",
      link: "/resources/news-blogs/10",
    },
    {
      title:
        "উদ্ভিদ-ভিত্তিক খাদ্যাভ্যাস: স্বাস্থ্য না শুধুই একটা অতিরঞ্জিত প্রচার?",
      excerpt:
        "রঙিন সবজি ও ফলের ছবি দেখে অনেকেই উদ্ভিদ-ভিত্তিক খাদ্যাভ্যাসে আগ্রহী হচ্ছেন। কিন্তু এটি কি সত্যিই আমাদের জন্য উপকারী, নাকি কেবল একটি ট্রেন্ড? আমাদের খাদ্য সংস্কৃতি ও বাস্তবতার আলোকে এই লেখায় বিষয়টি বিশ্লেষণ করা হয়েছে।",
      image: "/assets/blogs-cover/11.png",
      lang: "bn",
      link: "/resources/news-blogs/11",
    },
    {
      title: "ইন্টারমিটেন্ট ফাস্টিং: ওজন কমানো ও অন্যান্য সুবিধা",
      excerpt:
        "ইন্টারমিটেন্ট ফাস্টিং বর্তমানে স্বাস্থ্য ও ফিটনেস জগতে বহুল আলোচিত একটি পদ্ধতি। কিন্তু এটি আসলে কী, কীভাবে কাজ করে এবং সবার জন্য উপযোগী কি না—এই লেখায় তার স্পষ্ট ধারণা দেওয়া হয়েছে।",
      image: "/assets/blogs-cover/12.png",
      lang: "bn",
      link: "/resources/news-blogs/12",
    },
    {
      title: "পুষ্টি এবং PCOS: হরমোন ভারসাম্য বজায় রাখতে সহায়ক খাবার",
      excerpt:
        "PCOS শুধু প্রজননজনিত সমস্যা নয়, এটি একটি জটিল হরমোন ও বিপাকীয় রোগ। ঔষধের পাশাপাশি সঠিক খাদ্যাভ্যাস এই সমস্যার নিয়ন্ত্রণে গুরুত্বপূর্ণ ভূমিকা রাখে। এই লেখায় PCOS ব্যবস্থাপনায় সহায়ক খাবারের কথা আলোচনা করা হয়েছে।",
      image: "/assets/blogs-cover/13.png",
      lang: "bn",
      link: "/resources/news-blogs/13",
    },
    {
      title: "পুষ্টিগত মনোরোগবিদ্যা: খাবার যা মুড ভালো করে ও উদ্বেগ কমায়",
      excerpt:
        "খাদ্যাভ্যাস আমাদের মানসিক স্বাস্থ্যে গভীর প্রভাব ফেলে। পুষ্টিগত মনোরোগবিদ্যা এমন একটি ক্ষেত্র যা খাদ্য ও মানসিক অবস্থার সম্পর্ক বিশ্লেষণ করে। সাম্প্রতিক গবেষণায় দেখা গেছে, সঠিক ডায়েট মানসিক সুস্থতা উন্নত করতে পারে।",
      image: "/assets/blogs-cover/14.png",
      lang: "bn",
      link: "/resources/news-blogs/14",
    },
    {
      title: "কিশোর-কিশোরীদের পুষ্টি: জনস্বাস্থ্যের অনুপস্থিত যোগসূত্র",
      excerpt:
        "কিশোর বয়সে অপুষ্টি, রক্তস্বল্পতা ও স্থূলতা একসঙ্গে জনস্বাস্থ্যের বড় চ্যালেঞ্জ তৈরি করছে। এই বয়সের পুষ্টি সমস্যা দীর্ঘমেয়াদে বড় স্বাস্থ্যঝুঁকি তৈরি করতে পারে। কার্যকর নীতি ও পদক্ষেপের মাধ্যমে কিশোর পুষ্টিকে গুরুত্ব দেওয়া জরুরি।",
      image: "/assets/blogs-cover/15.png",
      lang: "bn",
      link: "/resources/news-blogs/15",
    },
    {
      title: `Colostrum - The "First Golden Hour" Superfood for Your Newborn`,
      excerpt: `In the delicate first hour after birth—the so-called "golden hour"—colostrum plays an irreplaceable role in setting your baby's lifelong health trajectory. Also known as "liquid gold," this early milk is action-packed with nutrients, immune boosters, and growth factors, making it far more than just a feeding—it’s nature’s first vaccine.`,
      image: "/assets/blogs-cover/16.png",
      lang: "en",
      link: "/resources/news-blogs/16",
    },
    {
      title:
        "What Should You Eat to Increase Your Immunity? A Daily Nutrition Guide",
      excerpt:
        "Frequent colds, long-lasting fatigue, slow wound healing, and recurring infections are common signs of a weak immune system. The foundation of immunity lies in healthy, nutritious food. Immunity-boosting foods contain essential nutrients and antioxidants that help the body defend itself against illness and infections.",
      image: "/assets/blogs-cover/17.png",
      lang: "en",
      link: "/resources/news-blogs/17",
    },
    {
      title: "Which Carbohydrates to Eat and Which to Avoid for Weight Loss?",
      excerpt:
        "Carbohydrates are the body’s primary energy source, yet they are often misunderstood during weight loss. Many people fail to lose weight by choosing the wrong carbs or cutting them out entirely. The truth is, not all carbohydrates are harmful—choosing the right ones supports energy, nutrition, and sustainable weight management.",
      image: "/assets/blogs-cover/18.png",
      lang: "en",
      link: "/resources/news-blogs/18",
    },
    {
      title:
        "No More Random Diets! Be Careful with Viral Nutrition Trends on Social Media",
      excerpt:
        "Viral diet trends may look harmless, but their long-term consequences are often overlooked. Nutrition plans should differ based on body type, health condition, activity level, and lifestyle. Following someone else’s diet—especially without professional guidance—can do more harm than good. A qualified dietitian is key to safe, effective results.",
      image: "/assets/blogs-cover/19.png",
      lang: "en",
      link: "/resources/news-blogs/24",
    },
    {
      title:
        "Food for Brain Development in Children: Which Nutrients Matter Most?",
      excerpt:
        "After six months of exclusive breastfeeding, introducing complementary foods can be challenging. Are these foods truly supporting a child’s brain development? Understanding which nutrients are essential is crucial to ensure healthy cognitive growth during early childhood.",
      image: "/assets/blogs-cover/20.png",
      lang: "en",
      link: "/resources/news-blogs/25",
    },
    {
      title: "7 Dietary Changes to Reduce Junk Food Addiction",
      excerpt:
        "Even after a full meal, cravings for chips, chocolates, burgers, or pizza are common. For many, junk food has become a daily habit. Though tempting and widely available, these foods negatively affect health. This article explores practical dietary changes to help break the cycle of junk food addiction.",
      image: "/assets/blogs-cover/21.png",
      lang: "en",
      link: "/resources/news-blogs/26",
    },
    {
      title: "Gastric and Acidity Problems? Learn Simple Food-Based Solutions",
      excerpt:
        "Do you experience bloating, chest burning, or stomach discomfort after eating oily or spicy foods? These are common signs of gastric and acidity issues. The good news is that simple dietary adjustments can significantly reduce symptoms and improve digestive comfort.",
      image: "/assets/blogs-cover/22.png",
      lang: "en",
      link: "/resources/news-blogs/27",
    },
    {
      title: "Detox Diets: Science or Scam?",
      excerpt:
        "Detox teas and slimming juices are increasingly popular, but experts warn that the science behind them is weak. Are these products truly improving health, or are they expensive myths? This article examines the reality behind detox diets.",
      image: "/assets/blogs-cover/23.png",
      lang: "en",
      link: "/resources/news-blogs/28",
    },
    {
      title:
        "Breaking Sweet Chains: Understanding Sugar Addiction and How to Overcome It",
      excerpt:
        "Sugar can be addictive, silently fueling cravings and causing serious health damage. Excessive intake has long-term consequences. This article explores the nature of sugar addiction, its health risks, and practical strategies to regain control.",
      image: "/assets/blogs-cover/24.png",
      lang: "en",
      link: "/resources/news-blogs/29",
    },
    {
      title: "Gut-Brain Connection: How Diet Affects Mental Health",
      excerpt:
        "The gut and brain share a powerful connection. Trillions of microorganisms in the gut—known as the microbiome—play a vital role in mental health. Research shows that a healthy gut supports emotional well-being, while digestive issues can negatively impact mental health.",
      image: "/assets/blogs-cover/25.png",
      lang: "en",
      link: "/resources/news-blogs/30",
    },
    {
      title: "The Rise of Plant-Based Diets: Health or Hype?",
      excerpt:
        "Social media is filled with vibrant plant-based meals promising longevity and sustainability. But in cultures where traditional diets are deeply rooted, skepticism remains. Are plant-based diets genuinely healthier, or are they simply a global trend?",
      image: "/assets/blogs-cover/26.png",
      lang: "en",
      link: "/resources/news-blogs/31",
    },
    {
      title: "Intermittent Fasting: Benefits Beyond Weight Loss",
      excerpt:
        "Intermittent fasting has become one of the most talked-about wellness strategies. But what does it really involve, and why has it gained such popularity? This article explores its benefits beyond just weight management.",
      image: "/assets/blogs-cover/27.png",
      lang: "en",
      link: "/resources/news-blogs/32",
    },
    {
      title: "Nutrition and PCOS: Foods That Help Hormonal Balance",
      excerpt:
        "PCOS is a complex hormonal and metabolic condition affecting many women. Beyond medication, targeted nutrition plays a crucial role in managing symptoms and restoring hormonal balance. This article highlights foods that support PCOS management.",
      image: "/assets/blogs-cover/28.png",
      lang: "en",
      link: "/resources/news-blogs/33",
    },
    {
      title:
        "Nutritional Psychiatry: Foods That Improve Mood and Reduce Anxiety",
      excerpt:
        "Nutritional psychiatry examines how diet influences mental health through inflammation, hormones, neurotransmitters, and the gut–brain axis. Emerging research shows that specific dietary patterns and nutrients can help prevent or reduce symptoms of common mental disorders.",
      image: "/assets/blogs-cover/29.png",
      lang: "en",
      link: "/resources/news-blogs/34",
    },
    {
      title: "Adolescent Nutrition: The Missing Link in Public Health",
      excerpt:
        "Adolescence is a critical period for growth, brain development, and lifelong health habits. Nutritional gaps during this stage can affect academic performance, mental health, and long-term disease risk. Global data shows adolescent malnutrition is a growing public health challenge.",
      image: "/assets/blogs-cover/30.png",
      lang: "en",
      link: "/resources/news-blogs/35",
    },
  ];
  const router = useRouter();
  const [language, setLanguage] = useState("all");

  const handleLangChange = (event, value) => {
    if (value !== null) setLanguage(value);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          bgcolor: "#f5821f",
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "#fff",
        }}
      >
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "95%", maxWidth: "1700px", margin: "0 auto" }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            RESOURCES
          </Typography>
          {/* {router?.asPath
              ?.split("-")
              ?.map(word => word.charAt(0).toUpperCase() + word.slice(1))
              ?.join(" ")} */}
        </Stack>
      </Box>

      <Box sx={{ bgcolor: "#f0eee2", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            textAlign="center"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            News and Blogs
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            textAlign="center"
            sx={{ maxWidth: "700px", mx: "auto" }}
          >
            See the real-world change we are creating. These stories highlight
            the dedication of our volunteers and the resilience of the
            communities we serve.
          </Typography>
        </Container>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "95%",
          maxWidth: "1700px",
          margin: "0 auto",
        }}
      >
        <ToggleButtonGroup
          value={language}
          exclusive
          onChange={handleLangChange}
          aria-label="language filter"
          sx={{ mt: 2.5 }}
        >
          <ToggleButton value="all" aria-label="all">
            All
          </ToggleButton>
          <ToggleButton value="en" aria-label="english">
            English
          </ToggleButton>
          <ToggleButton value="bn" aria-label="bangla">
            Bangla
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Grid
        container
        spacing={4}
        sx={{ width: "95%", maxWidth: "1700px", margin: "0 auto", my: 4 }}
      >
        {stories
          .filter((s) => (language === "all" ? true : s.lang === language))
          .map((story) => (
            <Grid item key={story.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 3,
                  "&:hover": { boxShadow: 6 },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={story.image}
                  alt={story.title}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{ fontWeight: "bold", height: "64px" }}
                  >
                    {story.title?.length > 75
                      ? story.title.substring(0, 75) + "..."
                      : story.title}
                  </Typography>
                  <Typography sx={{ height: "72px" }} color="text.secondary">
                    {story.excerpt?.length > 180
                      ? story.excerpt.substring(0, 180) + "..."
                      : story.excerpt}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    component={NextLink}
                    href={story.link}
                    size="small"
                    sx={{ color: "#f5821f", fontWeight: "bold" }}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </React.Fragment>
  );
}

export default NewsBlogsPage;
