import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function singleImpactStories() {
  const stories = [
    {
      id: "1",
      title:
        "Nourishing the Heart, Nurturing Change: How One Youth is Building a “HeartWise” Nutrition Culture in Bangladesh",
      imageOne: "minhajul/author.JPG",
      textPartOne:
        "Bangladesh, every morning begins with the sound of boats on the Teesta River and the determined footsteps of a young boy named Minhajul Islam Bappi.Only a few years ago, Minhajul was like many other youths in his community, aware of the struggles around him, but unsure of how to bring real change. That changed in 2023 when he joined the Bangladesh Youth Parliament and attended a three-day leadership training on food systems, supported by GAIN Bangladesh in Boda Upazila of Panchagarh District in Rangpur Division, Bangladesh.",
      imageTwo: "minhajul/image-2.jpeg",
      textPartTwo:
        "“The training was an eye-opener. I learned so much about the importance of proper nutrition and how local actions can create big changes. It made me realize that true leadership isn't just about big ideas, but about identifying and solving the problems right in front of you, in your own community.” The knowledge gained from the training empowered Minhajul. When he returned to Lalmonirhat and observed the students in his local schools with this new perspective, the problem became very clear- the lack of proper nutrition among students. From high schools to madrasas, students would fill their tiffin breaks with cheap, deep-fried snacks from roadside vendors -  spicy puffed rice, oily fritters, and samosas. These foods were easy to find but hard on young bodies, often leading to sickness and even skipping school. Determined to do something, Minhajul launched a heartfelt initiative: “Nutritious Khichuri for 10 Taka.” “I went to different schools and really paid attention during lunch breaks. We’d just learned about balanced diets and the impact of malnutrition, and here, almost every student was eating cheap, oily snacks. I realized this wasn't just a preference; it was a serious nutritional gap affecting their health and studies.” He started small, introducing the project at Teesta Khalilur Rahman Khadem High School. With only 10 Taka, students could enjoy a plate of homemade khichuri, nutritious rice cooked with lentils and vegetables. The change was immediate: attendance improved, energy levels rose, and students began to smile more during lunch. ",
      imageThree: "minhajul/image-3.jpg",
      imageFour: "minhajul/image-4.jpg",
      textPartThree:
        "And the impact didn’t stop at the school gates. A dedicated person was appointed to prepare the meals, giving that person a steady income and a new sense of purpose.Encouraged by the results, Minhajul expanded the initiative to three more schools: Kalmati Adarsha High School, Khuniagachh SC High School, and Horin Chawra High School. Today, over 3,000 students and teachers benefit from this effort every school day with support from GAIN and the continued drive of one young boy who chose to act.“It's incredible to see the difference. Students are more energetic in class, and teachers tell me attendance has improved. Knowing that a simple, nutritious meal for just 10 Taka can help thousands of students learn better and stay healthy - that’s the most rewarding part.”.",
      imageFive: "minhajul/image-5.jpg",
      imageSix: "minhajul/image-6.jpg",
      textPartFour: `But Minhajul’s mission didn’t end there. Through GAIN’s Training of Trainers (ToT), he brought 30 more youth leaders in the journey through community level training and launched three more community-based projects in Lalmonirhat: Maternal Nutrition and Health Services – ensuring mothers receive care and information they need. Nutrition Clubs and Awareness – empowering youth to become health ambassadors in their own villages. Nutrition Gardens – promoting sustainable, local food sources for better family meals. From a small riverbank village to hundreds of classrooms and homes, Minhajul’s journey proves that big change often begins with a single plate of food and a heart full of purpose. Ayesha Khanom, a teacher shared, "Before, students often felt sleepy in the afternoon classes. Now, with the Khichuri, they feel much more energetic and can concentrate better on studies. The khichuri is tasty, and it only costs 10 Taka!" Shakib Hasan Simanto (Class 09) from Teesta Khalilur Rahman Khadem High School shared, "Earlier, I had to attend afternoon classes on an empty stomach. I often had headaches due to hunger, and nothing felt good. Now I can have khichuri at school for just 10 Taka. The food is not only delicious but also very healthy for us. I can concentrate better in class now. I believe this project is a blessing for students like us from low-income families."`,
      imageSeven: "minhajul/image-7.jpg",
      imageEight: "minhajul/image-8.jpg",
      imageNine: "minhajul/image-9.jpg",
      imageTen: "minhajul/image-10.jpg",
      textPartFive:
        "These early experiences led to the creation of Kishori Kothon—a school-based program that creates open spaces for adolescent girls to talk about nutrition, menstruation, hydration, and emotional well-being. In partnership with the SMC School Activation Program, Joya organized sessions in six schools in Shayestaganj. Girls sat in circles, shared their thoughts, and learned from each other. A total of 672 sanitary pads were also distributed, helping address a basic but often overlooked need. She hopes to expand Kishori Kothon to schools across the country so more girls can grow up informed, confident, and supported. Mohammad Abdullah Al Mamun, Principal of Zohur Chan Bibi Women&#39;s College in Shayestaganj, praised the program: “Awareness programs like ‘Kishori Kothon, Amar Ami — Pushti Bujhi Sustho Thaki’ are extremely timely and necessary for our national development. Ensuring the physical and mental well-being of adolescent girls should be an initiative in every educational institution. Through regular nutrition, health, and mental awareness activities, our girls will become healthier, more confident, and prepared for the future. Such activities should be expanded nationwide.&quot; Today, HeartWise is a team of 16 young people working together to promote nutrition and care in schools and communities. Her message remains simple but powerful: Nutrition is not only about food. It’s also about rights, respect, and understanding people’s needs.",
    },
    {
      id: "2",
      title:
        "Nourishing the Heart, Nurturing Change: How One Youth is Building a “HeartWise” Nutrition Culture in Bangladesh",
      imageOne: "joya-rani/author.jpg",
      imageTwo: "joya-rani/image-2.jpg",
      imageThree: "joya-rani/image-3.jpg",
      imageFour: "joya-rani/image-4.jpg",
      imageFive: "joya-rani/image-5.jpg",
      imageSix: "joya-rani/image-6.JPG",
      imageSeven: "joya-rani/image-7.jpg",
      imageEight: "joya-rani/image-8.jpg",
      textPartOne:
        'Joya’s journey didn’t begin in a lab, but around her family’s lively kitchen table, filled with discussions about food safety and what truly nourishes. "My mother would say, ‘Grow up, and do what you can.’ That stuck with me," Joya recalls. This early passion, coupled with her graduation in Nutrition and Food Engineering, found its true north when she joined the Food Systems Youth Leadership Training, supported by GAIN.',
      textPartTwo:
        'Joya’s journey didn’t begin in a lab, but around her family’s lively kitchen table, filled with discussions about food safety and what truly nourishes. "My mother would say, ‘Grow up, and do what you can.’ That stuck with me," Joya recalls. This early passion, coupled with her graduation in Nutrition and Food Engineering, found its true north when she joined the Food Systems Youth Leadership Training, supported by GAIN.“Before the training, my approach was mostly local and focused on specific issues. But the training opened my eyes to systemic change. It taught me how to think beyond symptoms and focus on the root causes of nutritional challenges, empowering me to dream bigger for my community.”',
      textPartThree:
        "The training equipped her with a new lens to view familiar challenges. Joya explains, “After the training, I revisited the Mirpur Buddhi Protibondhi and Autistic School. Before, I saw their need for food, but the training helped me see the interconnectedness of nutrition with their overall well-being and inclusion. I realized the problem wasn't just a lack of nutritious options, but how these options were presented and integrated into their specific needs and learning styles.” In September 2024, Joya launched HeartWise Nutrition BD—a youth-driven platform advocating for what she calls “HeartWise Nutrition”: a culture where food nourishes both health and humanity. Her journey started with differently-abled children from Mirpur Buddhi Protibondhi and Autistic School. Many disliked vegetables. Few washed hands. But instead of correction, she chose connection. She used games, drawing, and emoji storytelling to reintroduce food as a friend—not fear. Slowly, the children responded—with smiles and bites of fruit.",

      textPartFour:
        "Joya reflects on this initial success, “It was incredibly rewarding to see the children at Mirpur School start exploring new foods and show more joy around meal times. When a child who previously refused all vegetables willingly tries a carrot because we made it part of a game, that’s a huge win. It proved that our empathetic, 'HeartWise' approach could make a real difference in their daily nutrition and happiness.” Joya’s mission grew quickly. In November, she joined the National Food Systems Workshop, offering insights into youth-led action. By December, she completed the Training of Trainers (ToT)—empowering 90 new youth leaders across three districts. In February 2025, HeartWise launched a Midday Meal Program for neurodivergent children. To reach those most often excluded, Joya organized the Pushti Bondhu Camp, a full-day initiative for 60 children with disabilities and their caregivers. Each child received a BMI check, dietary consultation, and health screening. Parents engaged in open dialogues on caregiving and nutrition. This initiative was supported by partners including GAIN, SUN Youth Network Bangladesh, Pustibid Foundation, SERAC Bangladesh, Youth Against Hunger, and JCI Dhaka Diplomats.",
      textPartFive:
        "“The impact is deeply appreciated by those involved. Masud Laskar, Principal of Mirpur School for the Intellectually Disabled and Autistic Children, affirmed, “Initiatives like the ‘Pushti Bondhu Camp’ are exemplary models of inclusive community engagement. Through personalized counseling, these programs help us better understand their unique nutritional needs and reaffirm our responsibility to provide the care they truly deserve.” A meaningful part of Joya’s work is shaped by her own experience growing up. During her adolescence, topics like menstruation and physical changes were rarely discussed. Many girls felt confused and embarrassed. As a result, some began skipping meals, missing school, and quietly struggling with their health and confidence. ",
      textPartFive:
        "These early experiences led to the creation of Kishori Kothon—a school-based program that creates open spaces for adolescent girls to talk about nutrition, menstruation, hydration, and emotional well-being. In partnership with the SMC School Activation Program, Joya organized sessions in six schools in Shayestaganj. Girls sat in circles, shared their thoughts, and learned from each other. A total of 672 sanitary pads were also distributed, helping address a basic but often overlooked need. She hopes to expand Kishori Kothon to schools across the country so more girls can grow up informed, confident, and supported. Mohammad Abdullah Al Mamun, Principal of Zohur Chan Bibi Women's College in Shayestaganj, praised the program: “Awareness programs like ‘Kishori Kothon, Amar Ami — Pushti Bujhi Sustho Thaki’ are extremely timely and necessary for our national development. Ensuring the physical and mental well-being of adolescent girls should be an initiative in every educational institution. Through regular nutrition, health, and mental awareness activities, our girls will become healthier, more confident, and prepared for the future. Such activities should be expanded nationwide. `Today, HeartWise is a team of 16 young people working together to promote nutrition and care in schools and communities. Her message remains simple but powerful: Nutrition is not only about food. It’s also about rights, respect, and understanding people’s needs.",
    },
  ];

  const authors = [
    {
      id: "1",
      name: "Minhajul Islam Bappi",
      role: "Founder, HeartWise Nutrition BD",
      image: "minhajul/author.JPG",
      bio: "Nutrition and Food Engineering graduate passionate about creating inclusive food systems.",
      contact: "minhajul@heartwisebd.org",
      address: "Khedabagh, Lalmonirhat.",
    },
    {
      id: "2",
      name: "Joya Rahman",
      role: "Founder, HeartWise Nutrition BD",
      image: "joya-rani/author.jpg",
      bio: "Nutrition and Food Engineering graduate passionate about creating inclusive food systems.",
      contact: "joya@heartwisebd.org",
      address: "Mirpur, Dhaka.",
    },
  ];

  const router = useRouter();
  const id = router.query.story;
  
  const storyDemo = stories.find((story) => story.id === id);
  const authorDemo = authors.find((author) => author.id === id);
  
  // console.log(id, storyDemo, authorDemo);

  if (!storyDemo || !authorDemo) return null;


  // const { singleImpactStories } = router.query;
  // console.log(singleImpactStories?.impact - stories);
  return (
    <Box sx={{ bgcolor: "white", py: { xs: 6, md: 12 }, position: "relative" }}>
      {authorDemo && <AuthorCard author={authorDemo} />}
{storyDemo && <ImpactStoryCard storyDemo={storyDemo} />}

    </Box>
  );
}

export default singleImpactStories;

const ImpactStoryCard = ({ storyDemo }) => {
  return (
    <Container>
      <Typography
        fontWeight="600"
        fontSize="24px"
        color="text.primary"
        sx={{ mx: "auto", mb: "20px" }}
      >
        {storyDemo.title}
      </Typography>
      <Image
        objectFit="cover"
        src={`/assets/${storyDemo.imageOne}`}
        alt="author image"
        width={1152}
        height={720}
      />
      <Typography
        color="text.primary"
        sx={{ mx: "auto", mt: "10px", mb: "30px" }}
      >
        {storyDemo.textPartOne}
      </Typography>

      {storyDemo?.imageTwo && (
        <Image
          objectFit="cover"
          src={`/assets/${storyDemo.imageTwo}`}
          alt="author image"
          width={1152}
          height={720}
        />
      )}

      <Typography color="text.primary" sx={{ mx: "auto", mt: "10px" }}>
        {storyDemo.textPartTwo}
      </Typography>

      {storyDemo?.imageThree && storyDemo?.imageFour && (
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          {storyDemo?.imageThree && (
            <Image
              src={`/assets/${storyDemo.imageThree}`}
              alt="story image three"
              width={300}
              height={360}
              style={{ objectFit: "cover", flex: 1 }}
            />
          )}
          {storyDemo?.imageFour && (
            <Image
              src={`/assets/${storyDemo.imageFour}`}
              alt="story image four"
              width={300}
              height={360}
              style={{ objectFit: "cover", flex: 1 }}
            />
          )}
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          marginTop: "16px",
        }}
      >
        {storyDemo?.imageFive && (
          <Image
            src={`/assets/${storyDemo.imageFive}`}
            alt="story image three"
            width={300}
            height={360}
            style={{ objectFit: "cover", flex: 1 }}
          />
        )}
        {storyDemo?.imageSix && (
          <Image
            src={`/assets/${storyDemo.imageSix}`}
            alt="story image four"
            width={300}
            height={360}
            style={{ objectFit: "cover", flex: 1 }}
          />
        )}
      </Box>

      {storyDemo.textPartThree && (
        <Typography color="text.primary" sx={{ mx: "auto", mt: "10px" }}>
          {storyDemo.textPartThree}
        </Typography>
      )}

      {storyDemo?.imageSeven && storyDemo?.imageEight && (
        <Box
          sx={{
            display: "flex",
            gap: 2,
            marginTop: "16px",
          }}
        >
          {storyDemo?.imageSeven && (
            <Image
              src={`/assets/${storyDemo.imageSeven}`}
              alt="story image three"
              width={300}
              height={360}
              style={{ objectFit: "cover", flex: 1 }}
            />
          )}

          {storyDemo?.imageEight && (
            <Image
              src={`/assets/${storyDemo.imageEight}`}
              alt="story image four"
              width={300}
              height={360}
              style={{ objectFit: "cover", flex: 1 }}
            />
          )}
        </Box>
      )}

      {storyDemo.textPartFour && (
        <Typography color="text.primary" sx={{ mx: "auto", mt: "10px" }}>
          {storyDemo.textPartFour}
        </Typography>
      )}

      {storyDemo.imageNine && <Image
        src={`/assets/${storyDemo.imageNine}`}
        alt="story image four"
        width={1152}
        height={500}
        style={{ objectFit: "cover", flex: 1 }}
      />}
      {storyDemo.imageTen && <Image
        src={`/assets/${storyDemo.imageTen}`}
        alt="story image four"
        width={1152}
        height={500}
        style={{ objectFit: "cover", flex: 1 }}
      />}
  

      {storyDemo.textPartFive && (
        <Typography color="text.primary" sx={{ mx: "auto", mt: "10px" }}>
          {storyDemo.textPartFive}
        </Typography>
      )}
    </Container>
  );
};

const AuthorCard = ({ author }) => {

  if (!author) return null;

  // console.log(author)
  return (
    <Box
      sx={{
        position: "fixed",
        top: 230,
        right: 20,
        border: "2px solid black",
        p: "8px 10px",
        width: 330, // 👈 same as image width
        boxSizing: "border-box", // 👈 include padding in width
      }}
    >
      <Image
        src={`/assets/${author.image}`}
        alt="author image"
        width={200}
        height={200}
        style={{ objectFit: "cover", width: "100%", height: "auto" }}
      />

      <Typography
        fontWeight={500}
        fontSize="16px"
        color="text.primary"
        sx={{ mb: "4px", wordBreak: "break-word" }}
      >
        {author.name}
      </Typography>

      <Typography
        fontWeight={500}
        fontSize="16px"
        color="text.secondary"
        sx={{ mb: "4px", wordBreak: "break-word" }}
      >
        Role: {author.role}
      </Typography>

      <Typography
        fontWeight={500}
        fontSize="16px"
        color="text.secondary"
        sx={{ mb: "4px", wordBreak: "break-word" }}
      >
        Contact: {author.contact}
      </Typography>

      <Typography
        fontWeight={500}
        fontSize="16px"
        color="text.secondary"
        sx={{ mb: "4px", wordBreak: "break-word" }}
      >
        Address: {author.address}
      </Typography>

      <Typography
        fontWeight={500}
        fontSize="16px"
        color="text.secondary"
        sx={{ mb: "4px", wordBreak: "break-word" }}
      >
        Bio: {author.bio}
      </Typography>
    </Box>
  );
};
