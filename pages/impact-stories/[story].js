import {
  Box,
  Container,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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
        "Joya reflects on this initial success, “It was incredibly rewarding to see the children at Mirpur School start exploring new foods and show more joy around meal times. When a child who previously refused all vegetables willingly tries a carrot because we made it part of a game, that’s a huge win. It proved that our empathetic, 'HeartWise' approach could make a real difference in their daily nutrition and happiness.” Joya’s mission grew quickly. In November, she joined the National Food Systems Workshop, offering insights into youth-led action. By December, she completed the Training of Trainers (ToT)—empowering 90 new youth leaders across three districts. In February 2025, HeartWise launched a Midday Meal Program for neurodivergent children. To reach those most often excluded, Joya organized the Pushti Bondhu Camp, a full-day initiative for 60 children with disabilities and their caregivers. Each child received a BMI check, dietary consultation, and health screening. Parents engaged in open dialogues on caregiving and nutrition. This initiative was supported by partners including GAIN, SUN Youth Network Network Bangladesh, Pustibid Foundation, SERAC Bangladesh, Youth Against Hunger, and JCI Dhaka Diplomats.",
      textPartFive:
        "“The impact is deeply appreciated by those involved. Masud Laskar, Principal of Mirpur School for the Intellectually Disabled and Autistic Children, affirmed, “Initiatives like the ‘Pushti Bondhu Camp’ are exemplary models of inclusive community engagement. Through personalized counseling, these programs help us better understand their unique nutritional needs and reaffirm our responsibility to provide the care they truly deserve.” A meaningful part of Joya’s work is shaped by her own experience growing up. During her adolescence, topics like menstruation and physical changes were rarely discussed. Many girls felt confused and embarrassed. As a result, some began skipping meals, missing school, and quietly struggling with their health and confidence. ",
      textPartFive:
        "These early experiences led to the creation of Kishori Kothon—a school-based program that creates open spaces for adolescent girls to talk about nutrition, menstruation, hydration, and emotional well-being. In partnership with the SMC School Activation Program, Joya organized sessions in six schools in Shayestaganj. Girls sat in circles, shared their thoughts, and learned from each other. A total of 672 sanitary pads were also distributed, helping address a basic but often overlooked need. She hopes to expand Kishori Kothon to schools across the country so more girls can grow up informed, confident, and supported. Mohammad Abdullah Al Mamun, Principal of Zohur Chan Bibi Women's College in Shayestaganj, praised the program: “Awareness programs like ‘Kishori Kothon, Amar Ami — Pushti Bujhi Sustho Thaki’ are extremely timely and necessary for our national development. Ensuring the physical and mental well-being of adolescent girls should be an initiative in every educational institution. Through regular nutrition, health, and mental awareness activities, our girls will become healthier, more confident, and prepared for the future. Such activities should be expanded nationwide. `Today, HeartWise is a team of 16 young people working together to promote nutrition and care in schools and communities. Her message remains simple but powerful: Nutrition is not only about food. It’s also about rights, respect, and understanding people’s needs.",
    },
    {
      id: "3",
      title:
        "Reviving the Soul of the Soil: Rabby’s Journey to Restoring Land and Hope in Sirajganj",
      imageOne: "rabby/1.jpg",
      imageTwo: "rabby/2.jpg",
      imageThree: "rabby/3.jpg",
      imageFour: "rabby/4.jpg",
      imageFive: "rabby/5.jpg",
      imageSix: "rabby/6.jpg",
      imageSeven: "rabby/7.jpg",
      imageEight: "rabby/8.jpg",
      textPartOne:
        "Rabby first learned about the Food Systems Youth Leadership Training of Trainers while scrolling on social media. The words “youth” and “leadership” caught his attention, and he registered out of curiosity. He did not expect it to change anything. Yet the training became a meaningful turning point in how he understood his role in the community. Through sessions on food systems, Rabby began to view familiar problems differently. He realised that leadership does not always require a position or authority. It can start with noticing an issue and deciding to take responsible action. “The training awakened the leader within me. I learned how to speak for justice at the decision-making table. This journey turned me from a dreamer into a doer,” he said.",
      textPartTwo:
        "The lessons stayed with him when he returned to Kamarpara village in Sirajganj. Farmers there had been struggling for years. Heavy use of chemical fertilisers had weakened the soil. Where fields once yielded 20 to 25 maunds of paddy per acre, production had fallen to 10 to 15. Vegetables lacked colour, and seasonal crops were becoming harder to grow. Farmers tried using more chemicals, but the soil grew even weaker.Rabby felt that change needed to come from within the community. So he started small. He sat with farmers, listened to their concerns and tried to understand what they hoped for. From these conversations, an idea took shape: a vermicomposting initiative he named “Turning the Soil Around with Earthworms.” The goal was simple. Use organic compost to bring life back to the soil.",
      textPartThree:
        "There was a time when frustration hung heavy in the air of Kamarpara village in Sirajganj. Years of chemical fertilizer use had stripped the soil of its fertility. Crop yields declined sharply where once farmers harvested 20–25 maunds of paddy per acre, it had dropped to just 10–15. Whether it was rice, vegetables, or seasonal produce, nothing was growing like before. Farmers responded with more chemicals, but the land grew only weaker. When Rabby returned home, he saw the same weary soil, the same worried farmers, and the same quiet despair. But he also realized something important, true change wouldn’t come from outside. It had to begin with the people. So, he began small. Sitting with farming families each day, he listened not just to their frustrations, but also to their dreams. And from those deep conversations, a new vision emerged: “Turning the Soil Around with Earthworms.” A vermicomposting initiative that would revive the land using organic compost and earthworms. The beginning was far from easy. Some people doubted the idea. Others laughed at the thought of using earthworms to fix damaged land. Rabby had no funding and used his own savings for the first steps. Some local influencers refused to provide space for the project. Even so, he continued. Slowly, support started to grow. With encouragement from the Bangladesh Youth Mock Parliament and funding from GAIN, the project became possible. The support kept the initiative alive during its most difficult stages. ",

      textPartFour:
        "Thirteen young people eventually joined Rabby. They worked together to launch the vermicomposting effort, learning and experimenting as a team. Within two years, the impact became visible. The same land that had lost its strength was producing 20 to 25 maunds of rice per acre again. Farmers used no chemical fertilisers. Only organic compost. The soil responded with healthier crops and renewed fertility.“Farmers told me their yields rose noticeably after using my vermicompost,” Rabby said. “The tired soil is finally breathing again.”",
      textPartFive:
        "Farmers began sharing their own experiences. Yeasir Safat, a young farmer, said, “This project transformed me from an ordinary farmer into an aware and aspiring entrepreneur. Now I am thinking about producing compost myself so that more farmers like me can benefit.” Laboni Khatun, a woman farmer, said, “After using this compost, the colour of the vegetables changed. They are greener and healthier. I get a better price at the market now.” Farmer Hasmot Ali shared, “The soil used to feel lifeless and yields were low. After using the organic compost, the land came back to life. The harvest is better, and the soil feels softer and more fertile.” Md. Shahidul Islam added, “My crops were not growing well and the soil was drying up. After using the vermicompost you introduced, the soil became soft again and yields improved. It feels like the soil is alive once more.” Hearing these voices strengthened Rabby’s belief in community driven change. He also began sharing his knowledge widely. From Panchagarh to Barguna, Habiganj to Lalmonirhat, and even at Patuakhali Science and Technology University, Rabby trained more than 160 young people. Each training felt like planting a new seed of hope. Many of the youth he trained have gone on to start their own projects, promoting natural farming methods and eco-friendly food systems in their communities.",
      textPartSix:
        "Looking back, Rabby believes the Food Systems Youth Leadership Training was the moment that helped him find clarity and direction. “The training did not just make me a trainer. It helped me believe that young people can guide change,” he said. Rabby’s work continues, and the soil he helped restore is only the beginning. Through the commitment of young people like him, more villages are seeing the possibility of healthier land, stronger harvests and sustainable farming practices.",
    },
    {
      id: "4",
      title:
        "From Market Stalls to Mindsets: How One Youth Is Transforming Diets in Bangladesh",
      imageOne: "faizur/author.jpg",
      imageTwo: "faizur/image-2.jpg",
      imageThree: "faizur/image-3.jpg",
      imageFour: "faizur/image-4.jpg",
      imageFive: "faizur/image-5.jpg",
      imageSix: "faizur/image-6.jpg",
      imageSeven: "faizur/image-7.jpg",
      textPartOne:
        "When Md. Faizar Hossain Miraz, a student from the University of Dhaka, joined the Food Systems  Youth Leadership Training of Trainers (ToT) program by GAIN, he saw it as an opportunity to learn something new. What he did not expect was how much the experience would influence the way he viewed food choices in everyday life. “I always wanted to do something useful for my community. The training helped me understand how food systems shape our health and habits in ways we do not always notice,” he said.",
      textPartTwo:
        "During the training, Miraz explored how food moves from farms to markets and finally to the plate. He learned how small decisions made during buying and cooking can affect nutrition and long-term wellbeing. One idea stood out to him. Bangladesh grows a wide range of vegetables, yet many people do not eat them regularly because they are unsure about their benefits.",
      textPartThree:
        "To understand this better, Miraz visited local markets and nearby neighbourhoods. He spoke with vendors, observed shoppers and looked at the variety of produce available. “It became clear that many people simply lacked information. They were surrounded by nutritious vegetables, but most did not know what each one could offer,” he explained. This insight shaped his next step. Miraz created colourful info-cards for market stalls. Each card included the vegetable’s name, key nutrients and the health benefits. By placing the cards beside the produce, he turned market visits into small learning moments. The idea was straightforward. Make information visible, easy to understand and available at the point of purchase. The response was encouraging. Shoppers paused to read the cards and began asking questions about vegetables they had previously ignored. Vendors noticed changes too. “At first, I was not sure about the cards. Now I see customers stopping to read them. Some ask me more about what is written. People are buying more leafy greens and different types of gourds since Miraz Bhai started this,” said vendor Karim Mia.",

      textPartFour:
        "Motivated by the results, Miraz continued building on what he learned. After completing the ToT program, he and other participants organised two youth leadership training sessions, one at Global Platform Bangladesh in Dhaka and another at Bangladesh Agricultural University in Mymensingh. They shared their knowledge with new groups of young people, each of whom developed a community action plan. Miraz and his co-facilitators now host monthly mentorship calls to track progress and provide support. For Miraz, this work is about helping people make informed decisions in simple, everyday settings. His project shows that a small change in how information is shared can influence healthier food choices in the community. “Real change starts when people feel confident about the choices they make. Sometimes all they need is a little information at the right moment,” he said.",
    },
    {
      id: "5",
      title:
        "From Classroom to Community: Promoting Nutrition Awareness in Khulna",
      imageOne: "juhi/image-1.HEIC",
      imageTwo: "juhi/image-2.jpg",
      imageThree: "juhi/image-3.jpg",
      imageFour: "juhi/image-4.jpg",
      imageFive: "juhi/image-5.jpg",
      imageSix: "juhi/image-6.HEIC",
      textPartOne:
        "In the city of Khulna, Nushrath Jahan Juhi has been working to make nutrition a more visible part of everyday learning. Her journey gained momentum after she joined GAIN’s Food Systems Youth Leadership Training of Trainers, a programme designed to help young people understand food systems and lead local solutions.Reflecting on the experience, she said, “It did not just give us information about food systems. It helped us identify local challenges and think about community driven solutions. I learned how nutrition, education and community health are closely connected, and it encouraged me to think bigger about my role.”",
      textPartTwo:
        "Alongside her involvement with SUN Youth Network Network Bangladesh, Nushrath developed skills in leadership, coordination and community engagement. These skills proved valuable when she organised a three day community training in Khulna, a region facing increasing salinity challenges. The training brought together young people and created a space for them to understand their place in the local food system. Participants included university representatives, Youth Development Officers, researchers and local leaders, allowing for meaningful discussion across different groups.",
      textPartThree:
        "Eager to build on what she learned, Nushrath began visiting schools and community centres in Khulna. She spoke with students, teachers and parents to understand the everyday challenges adolescents face. The same pattern appeared in several schools. Students knew basic science, but many struggled to apply that knowledge to their own eating habits and wellbeing. Nutrition felt distant from their daily lives.“During my visits after the training, I noticed that many students lacked practical nutrition knowledge. They could memorise facts, but when it came to choosing foods that support energy, focus or overall health, there was confusion or little interest. I realised that we needed to make nutrition relatable and engaging, not just a line in a textbook,” she said. This insight led to the creation of Nutrition School, an initiative that brings learning to life through games, demonstrations and interactive activities. Instead of formal lessons, students are encouraged to participate, ask questions and connect nutrition to their own routines. Topics range from balanced diets to physical activity and mental wellbeing, all presented in a way that feels accessible to children and adolescents. The response has been promising. Students look forward to the sessions, and teachers notice increased engagement with health topics. Building on this interest, Nushrath is now working with school authorities, education officers and the Upazila Nirbahi Officer to explore how healthy diet education can be integrated into the existing physical education curriculum. Her goal is to support long term change within the school system. Rasel, a high school student who attended Nutrition School, shared his experience. “Before, I did not really understand how food affected my energy or focus. After attending the sessions, I see how important nutrition is for both my body and mind. I have started eating more fruits and vegetables, and I share what I learned with my friends and family.”",

      textPartFour:
        "Through Nutrition School and her broader community efforts, Nushrath is helping create a shift in how young people think about food and health. Her work shows how youth leadership, supported by the right tools and training, can make nutrition education more engaging and relevant for students. Her vision remains clear: when children understand and value nutrition, they are better prepared to take care of themselves and contribute to stronger, healthier communities. ",
    },
    {
      id: "6",
      title:
        "From Campus Conversations to Global Advocacy: Al-Amin’s Journey in Transforming Food Systems",
      imageOne: "al-amin/AL Amin.JPG",
      imageTwo: "al-amin/image-2.jpg",
      imageThree: "al-amin/image-3.jpg",
      imageFour: "al-amin/image-4.jpg",
      imageFive: "al-amin/image-5.jpg",
      imageSix: "al-amin/image-6.jpg",
      imageSeven: "al-amin/image-7.jpg",
      textPartOne:
        "In December 2024, Md. Al-Amin joined a Training of Trainers programme organized by the Global Alliance for Improved Nutrition and the SUN Youth Network Network Bangladesh, with support from the Ministry of Health and Family Welfare and the Food Planning and Monitoring Unit. The four day training brought together twenty five young participants eager to learn how to strengthen local food systems. For Al-Amin, it became an important starting point for the work he would soon lead.",
      textPartTwo:
        "“The ToT was incredibly empowering. We gained practical tools to analyze local food systems, identify gaps and mobilize peers. I felt a responsibility to take these lessons back to my university and encourage action where I studied,” he said. Back on campus, Al-Amin began by observing daily habits and speaking with students. He asked about their eating patterns, their understanding of food sources and their awareness of food waste in canteens. From these conversations, one issue stood out. Many students had limited understanding of sustainable choices, nutrition or the environmental impact of food waste. “I noticed a disconnect,” he explained. “Students could access a range of foods, yet many were unsure about how to make nutritious selections or why food waste matters. It showed me that peer-led initiatives could help build a more informed food culture on campus.” Guided by this insight, Al-Amin launched a series of youth focused discussions and workshops at his university. These sessions introduced students to the basics of sustainable food systems, the value of dietary diversity and small ways to reduce waste in their everyday routines. Inspired by the response, he expanded his efforts and facilitated a three day Food Systems Youth Leadership training at the Dhaka University of Engineering and Technology. He adapted the ToT model to support engineering students in building practical advocacy skills and identifying opportunities for food system improvements within their own environment. ",
      textPartThree:
        "The impact became visible through the actions of the participants. Fatima, an engineering student who joined the training, said, “Al-Amin’s sessions at DUET made the topic meaningful for us. Our group started a campaign to reduce food waste in the cafeteria, and we can already see the difference.” In early 2025, while working with GAIN Bangladesh, Al-Amin applied to the Act4Food initiative supported by GAIN. After multiple stages of assessment, including a viva voce, he was selected as Bangladesh’s national youth representative. He attended the Act4Food capacity building workshop in Arusha, Tanzania, joining young leaders from more than twenty countries. Through field visits and group work in Tanzania, Al-Amin strengthened his understanding of community based solutions and returned to Bangladesh with new ideas to support the youth he mentored. The groups he trained have since launched awareness campaigns, food related community projects and youth led activities that reflect shared learning and collective purpose. ",

      textPartFour:
        "At present, Al-Amin is working on a collective action project focused on reducing micronutrient deficiencies among adolescents by promoting nutrient rich local foods and revitalizing indigenous food systems. He is also exploring ways to engage with multinational companies, advocating for practices that are environmentally friendly and supportive of consumer wellbeing. Al-Amin’s journey from a university student to a national and global youth advocate shows the value of investing in young leaders. With the right support and opportunities, they not only contribute to change but also guide it forward for others. ",
    },
    {
      id: "7",
      title:
        "Bringing Smiles Through Food: A Journey with the ‘Tiffiner Hashi’ Project",
      imageOne: "sayeda/1.jpg",
      imageTwo: "sayeda/2.jpg",
      imageThree: "sayeda/3.jpg",
      imageFour: "sayeda/4.jpg",
      imageFive: "sayeda/5.jpg",
      imageSix: "sayeda/6.jpg",
      textPartOne:
        "At Vidyasava School in Khulna, lunchtime often revealed a quiet truth. Some children brought colourful tiffin boxes filled with snacks, while others opened empty lids or avoided eating altogether. A few shared what they had, and many stayed silent. Watching these moments week after week made Sayeda think about how something as simple as tiffin time could reflect a much bigger reality. Her interest in the issue deepened after she participated in the Food Systems Youth Leadership Training organized by GAIN and SUN Youth Network Network Bangladesh, with support from national partners. The training offered a clearer understanding of how food, equity and children’s wellbeing are connected. “It did not just give us information about food systems,” she said. “It helped me understand how nutrition, fairness and learning come together. That connection made me pay closer attention to the children in my own community.” After the training, Sayeda began visiting nearby schools including Vidyasava School and Balughat High School. She spoke with teachers, students and parents to learn more about their experiences. In many classrooms she found the same pattern. Some students wasted food, others skipped their tiffin entirely, and many felt embarrassed to admit they were hungry. “One teacher told me that some students pretend not to be hungry to avoid embarrassment. Hearing that made the situation feel very real,” she said.",
      textPartTwo:
        "To respond to this, Sayeda created the Tiffiner Hashi project, an initiative focused on reducing food waste and making sure no child feels left out during tiffin time. She started small, with a youth team and a plan built around awareness and empathy. Together they organized sessions on healthy tiffin choices, nutrition and hygiene. Posters and activities helped children learn in a simple and engaging way. They introduced a “Tiffin Bank,” a sharing model that allowed students to contribute or receive food discreetly. Games and conversations helped create comfort and reduce stigma. Starting the project came with challenges. Funding was limited and some people doubted whether the idea would work. Still, Sayeda continued. Over time, the Ryan Foundation and Center for Aid partnered with her team and signed an MoU, providing fifteen thousand taka to support the work. That support helped them expand their activities and reach more students. The impact soon became visible. Hundreds of students participated in the sessions, and teachers reported more conversations about healthy eating and sharing. One of the most meaningful changes for Sayeda came from a student who had once been quiet about her empty tiffin. “The most meaningful moment for me is when a usually quiet student now participates in the Tiffin Bank. She accepts or shares food without hesitation. It is not just about the meal but the sense of inclusion she feels,” Sayeda said. ",
      textPartThree:
        "Students are also noticing the difference. Samira, a young student from Vidyasava School, shared, “Before Tiffiner Hashi, my tiffin box was often empty and I used to hide during break time. Now I always have something to eat with my friends, and I learned to draw my favourite healthy vegetables from the posters. I do not feel left out anymore.” For Sayeda, the goal goes beyond tiffin. She hopes to expand Tiffiner Hashi to more schools, train more youth and encourage communities to view food not only as a meal but as a way to build belonging, confidence and care. ",

      textPartFour:
        " This project isn’t just about tiffin—it’s about awareness, sustainability, and care. As she moves forward, she plans to expand “Tiffiner Hashi” to more schools, train other youth, and strengthen the message that every child deserves healthy food and a happy break time. The change is visible, and students like young Samira from Bidyasovha School feel it too.Before 'Tiffiner Hashi,' my tiffin box was often empty, and I used to hide during break time. Now, because of the 'Tiffin Bank' Sayeda Apa started, I always have something to eat with my friends, and I’ve even learned to draw my favorite healthy vegetables from the posters! I don't feel left out anymore.",
    },
    {
      id: "8",
      title: "Pusti Bondhu: A Youth-Led Initiative to Improve Campus Nutrition",
      imageOne: "soyed/author.jpg",
      imageTwo: "soyed/image-2.jpg",
      imageThree: "soyed/image-3.jpg",
      imageFour: "soyed/image-4.jpg",
      imageFive: "soyed/image-5.jpg",
      imageSix: "soyed/image-6.jpg",
      imageSeven: "soyed/image-7.JPG",
      textPartOne:
        "At Daffodil International University, mornings often begin in a rush. Many students arrive to class without breakfast, either due to time constraints or tight budgets. Soyed Mehedi Hassain Nayeem noticed this pattern during his regular interactions with classmates. Over time, he wondered how these daily habits were affecting students’ concentration, health and learning His interest in the issue deepened in December 2024 when he took part in the Training of Trainers programme organized by GAIN and SUN Youth Network Network Bangladesh. The event brought together young people from forty districts to learn about nutrition, food systems and youth led action. For Mehedi, it offered a new way of understanding student wellbeing on campus “The training gave me confidence to take small steps that can lead to big changes,” he said. ",
      textPartTwo:
        "After the training, Mehedi returned to his university with a clearer sense of direction. He conducted informal field visits and short surveys to understand students’ eating habits more closely. The results pointed to the same challenge he had been observing. Many students were skipping breakfast, which affected their energy levels and focus throughout the day. To help address this, Mehedi created Pusti Bondhu, a campus based initiative offering nutritious breakfast meals at an affordable price of twenty taka. The initiative was supported by GAIN and the Department of Nutrition and Food Engineering at Daffodil International University. Its aim was simple. Make healthy food accessible and convenient at the place where students spend most of their time. “Many students skip breakfast because they are in a rush or trying to save money. We wanted to make healthy choices easier by placing the solution on campus,” Mehedi explained. Every morning, students now have access to a filling and affordable meal that helps them stay attentive in class. The project also encourages students to reflect on their eating habits and understand the importance of a balanced diet. ",
      textPartThree:
        "“The most rewarding part of Pusti Bondhu is hearing directly from students how it is changing their day,” he said. Tasnim Zaman Nody, a student from the Department of Nutrition and Food Engineering, shared, “Earlier, I often skipped breakfast due to high food prices, which made it hard to focus in class. Thanks to Pusti Bondhu, I can have a healthy breakfast for just twenty taka. I feel more active in my classes and my study performance has improved.” Encouraged by the impact at his own university, Mehedi reached out to other institutions. He conducted Food Systems Youth Leadership sessions at Bangladesh Agricultural University, Barisal University and several other campuses. These sessions introduced students to food systems, nutrition and youth advocacy. Many participants began working on awareness campaigns and exploring their own ideas for small initiatives similar to Pusti Bondhu. ",

      textPartFour:
        "Today, Mehedi serves as a facilitator and youth representative for the SUN Youth Network Network Bangladesh. He supports new facilitators, shares his experience and helps guide youth led activities across the country. Mehedi’s journey shows how practical learning, combined with local action, can improve student wellbeing and encourage young people to shape healthier food environments in their own communities. ",
    },
    {
      id: "9",
      title:
        "From Courtyard to Community Change: A Youth-led Nutrition Movement in Rural Bangladesh",
      imageOne: "imran-rabby/author.jpg",
      imageTwo: "imran-rabby/image-2.jpg",
      imageThree: "imran-rabby/image-3.jpg",
      imageFour: "imran-rabby/image-4.jpg",
      imageFive: "imran-rabby/image-5.jpg",
      imageSix: "imran-rabby/image-6.jpeg",
      imageSeven: "imran-rabby/image-7.jpeg",
      textPartOne:
        "In Tala, Satkhira, families often navigate the challenges of saline soil and limited access to affordable nutritious food. These difficulties are especially felt by women and mothers who work daily to provide balanced meals in an environment where fresh produce is scarce.For Imran Rabby, understanding these challenges more deeply began after he joined the Food Systems Youth Leadership Training hosted by GAIN and SUN Youth Network Network Bangladesh. The training helped him explore how local food systems shape people’s options and how youth can support community level solutions. “As a youth from the coastal belt, we often dream big but struggle to turn our ideas into action. This training gave me the tools to take practical steps that respond to our community’s real needs. It was an empowering experience,” he said.",
      textPartTwo:
        "Motivated by what he learned, Imran first shared his knowledge with other young people. He organized similar training sessions at Khulna University and Patuakhali Science and Technology University, engaging thirty participants at each institution. These youth later initiated their own small projects, showing how learning can spread through peer networks Back in Satkhira, Imran focused on a challenge affecting many women in his community. Mothers often struggled to access nutritious food due to poor soil conditions and financial barriers. Conversations with them made the issue more personal and immediate. “When I returned home and spoke with mothers more intentionally, the connection between their struggles and what we learned about local food environments became very clear. Their limited access was not only a matter of poverty but also a gap in the local food system that youth could help address,” he explained. ",
      textPartThree:
        "This led to the creation of “Amar Uthan, Amar Pushti Bagan,” meaning “My Courtyard, My Nutrition Garden,” launched with support from SUN Youth Network Network Bangladesh and Imran’s youth organization, Greenman. The initiative helps families grow nutrient rich vegetables right in their courtyards, reducing dependence on markets and improving access to fresh foods. One of the participants, Marufa Begum, mother of twin toddlers, shared how the project changed her daily life. “It was nearly impossible to meet our nutritional needs,” she said. “Now, thanks to this project, most of our daily nutrition comes directly from what we grow.” The initiative began with a courtyard meeting where women discussed maternal and child nutrition, food security and dietary diversity. Participants then visited a model garden, which helped them visualize what was possible in their own homes. Mothers of children under five later formed peer groups and started cultivating their own gardens. To encourage creativity and sustainability, the project will recognize the three most nutrient rich and well maintained gardens. ",

      textPartFour:
        "Imran has seen how these small gardens can strengthen families and communities. “Through Amar Uthan, Amar Pushti Bagan, I witnessed how simple, local actions can improve nutrition and support women to take leadership in their households,” he said. Imran’s work shows how young people can connect national priorities with local realities. By turning knowledge into practical action, he and his peers are helping communities build resilience, improve household nutrition and expand opportunities for women in coastal Satkhira. ",
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
    {
      id: "3",
      name: "M Rabby",
      role: "Founder, HeartWise Nutrition BD",
      image: "rabby/1.jpg",
      bio: "Nutrition and Food Engineering graduate passionate about creating inclusive food systems.",
      contact: "rabby@heartwisebd.org",
      address: "Sirajganj.",
    },
    {
      id: "4",
      name: "Faizar Hossain Miraz",
      role: "Founder, HeartWise Nutrition BD",
      image: "faizur/author.jpg",
      bio: "Nutrition and Food Engineering graduate passionate about creating inclusive food systems.",
      contact: "faizur@heartwisebd.org",
      address: "Dhaka",
    },
    {
      id: "5",
      name: "Nushrath Jahan Juhi",
      role: "Founder, HeartWise Nutrition BD",
      image: "juhi/author.jpg",
      bio: "Nutrition and Food Engineering graduate passionate about creating inclusive food systems.",
      contact: "juhi@heartwisebd.org",
      address: "Khulna",
    },
    {
      id: "6",
      name: "Al Amin",
      role: "Founder, HeartWise Nutrition BD",
      image: "al-amin/AL Amin.jpg",
      bio: "Nutrition and Food Engineering graduate passionate about creating inclusive food systems.",
      contact: "alamin@heartwisebd.org",
      address: "Dhaka",
    },
    {
      id: "7",
      name: "Sayeda Asmaul Jannat",
      role: "Founder, HeartWise Nutrition BD",
      image: "sayeda/1.jpg",
      bio: "Nutrition and Food Engineering graduate passionate about creating inclusive food systems.",
      contact: "sayeda@heartwisebd.org",
      address: "Dhaka",
    },
    {
      id: "8",
      name: "Soyed Mehedi Hassain Nayeem",
      role: "Founder, HeartWise Nutrition BD",
      image: "soyed/author.jpg",
      bio: "Nutrition and Food Engineering graduate passionate about creating inclusive food systems.",
      contact: "soyeda@heartwisebd.org",
      address: "Dhaka",
    },
    {
      id: "9",
      name: "Imran Rabby",
      role: "Founder, HeartWise Nutrition BD",
      image: "imran-rabby/author.jpg",
      bio: "Nutrition and Food Engineering graduate passionate about creating inclusive food systems.",
      contact: "imranrabby@heartwisebd.org",
      address: "Dhaka",
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
    <Box
      sx={{
        bgcolor: "white",
        py: { xs: 3, sm: 4, md: 6, lg: 8 },
        position: "relative",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {authorDemo && <AuthorCard author={authorDemo} />}
      {storyDemo && <ImpactStoryCard storyDemo={storyDemo} />}
    </Box>
  );
}

export default singleImpactStories;

const ImpactStoryCard = ({ storyDemo }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
        pt: 0,
        pb: 0,
      }}
    >
      <Typography
        fontWeight="600"
        fontSize={{ xs: "18px", sm: "20px", md: "22px", lg: "24px" }}
        color="text.primary"
        sx={{
          mx: "auto",
          mb: { xs: 2, sm: 2.5, md: 3 },
          mt: 0,
          wordBreak: "break-word",
          lineHeight: 1.3,
        }}
      >
        {storyDemo.title}
      </Typography>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          mb: { xs: 2, md: 3 },
          mt: 0,
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        <Image
          src={`/assets/${storyDemo.imageOne}`}
          alt="author image"
          width={1152}
          height={720}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "auto",
            maxWidth: "100%",
            display: "block",
          }}
        />
      </Box>
      <Typography
        color="text.primary"
        fontSize={{ xs: "14px", sm: "15px", md: "16px" }}
        sx={{
          mx: "auto",
          mt: { xs: 1, md: 2 },
          mb: { xs: 2, md: 3 },
          lineHeight: 1.7,
          wordBreak: "break-word",
        }}
      >
        {storyDemo.textPartOne}
      </Typography>

      {storyDemo?.imageTwo && (
        <Box
          sx={{
            width: "100%",
            position: "relative",
            mb: { xs: 2, md: 3 },
            mt: { xs: 2, md: 2 },
            borderRadius: 1,
            overflow: "hidden",
          }}
        >
          <Image
            src={`/assets/${storyDemo.imageTwo}`}
            alt="author image"
            width={1152}
            height={720}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              display: "block",
            }}
          />
        </Box>
      )}

      <Typography
        color="text.primary"
        fontSize={{ xs: "14px", sm: "15px", md: "16px" }}
        sx={{
          mx: "auto",
          mt: { xs: 1, md: 2 },
          lineHeight: 1.7,
          wordBreak: "break-word",
        }}
      >
        {storyDemo.textPartTwo}
      </Typography>

      {storyDemo?.imageThree && storyDemo?.imageFour && (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 2 },
            mb: { xs: 2, md: 3 },
            mt: { xs: 2, md: 2 },
          }}
        >
          {storyDemo?.imageThree && (
            <Box
              sx={{
                flex: 1,
                position: "relative",
                width: { xs: "100%", sm: "auto" },
                minWidth: 0,
                borderRadius: 1,
                overflow: "hidden",
              }}
            >
              <Image
                src={`/assets/${storyDemo.imageThree}`}
                alt="story image three"
                width={300}
                height={360}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  display: "block",
                }}
              />
            </Box>
          )}
          {storyDemo?.imageFour && (
            <Box
              sx={{
                flex: 1,
                position: "relative",
                width: { xs: "100%", sm: "auto" },
                minWidth: 0,
                borderRadius: 1,
                overflow: "hidden",
              }}
            >
              <Image
                src={`/assets/${storyDemo.imageFour}`}
                alt="story image four"
                width={300}
                height={360}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  display: "block",
                }}
              />
            </Box>
          )}
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 2 },
          mt: { xs: 2, md: 2 },
          mb: { xs: 2, md: 3 },
        }}
      >
        {storyDemo?.imageFive && (
          <Box
            sx={{
              flex: 1,
              position: "relative",
              width: { xs: "100%", sm: "auto" },
              minWidth: 0,
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <Image
              src={`/assets/${storyDemo.imageFive}`}
              alt="story image five"
              width={300}
              height={360}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                display: "block",
              }}
            />
          </Box>
        )}
        {storyDemo?.imageSix && (
          <Box
            sx={{
              flex: 1,
              position: "relative",
              width: { xs: "100%", sm: "auto" },
              minWidth: 0,
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <Image
              src={`/assets/${storyDemo.imageSix}`}
              alt="story image six"
              width={300}
              height={360}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                display: "block",
              }}
            />
          </Box>
        )}
      </Box>

      {storyDemo.textPartThree && (
        <Typography
          color="text.primary"
          fontSize={{ xs: "14px", sm: "15px", md: "16px" }}
          sx={{
            mx: "auto",
            mt: { xs: 1, md: 2 },
            lineHeight: 1.7,
            wordBreak: "break-word",
          }}
        >
          {storyDemo.textPartThree}
        </Typography>
      )}

      {storyDemo?.imageSeven && storyDemo?.imageEight && (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 2 },
            mt: { xs: 2, md: 2 },
            mb: { xs: 2, md: 3 },
          }}
        >
          {storyDemo?.imageSeven && (
            <Box
              sx={{
                flex: 1,
                position: "relative",
                width: { xs: "100%", sm: "auto" },
                minWidth: 0,
                borderRadius: 1,
                overflow: "hidden",
              }}
            >
              <Image
                src={`/assets/${storyDemo.imageSeven}`}
                alt="story image seven"
                width={300}
                height={360}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  display: "block",
                }}
              />
            </Box>
          )}

          {storyDemo?.imageEight && (
            <Box
              sx={{
                flex: 1,
                position: "relative",
                width: { xs: "100%", sm: "auto" },
                minWidth: 0,
                borderRadius: 1,
                overflow: "hidden",
              }}
            >
              <Image
                src={`/assets/${storyDemo.imageEight}`}
                alt="story image eight"
                width={300}
                height={360}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  display: "block",
                }}
              />
            </Box>
          )}
        </Box>
      )}

      {storyDemo.textPartFour && (
        <Typography
          color="text.primary"
          fontSize={{ xs: "14px", sm: "15px", md: "16px" }}
          sx={{
            mx: "auto",
            mt: { xs: 1, md: 2 },
            lineHeight: 1.7,
            wordBreak: "break-word",
          }}
        >
          {storyDemo.textPartFour}
        </Typography>
      )}

      {storyDemo.imageNine && (
        <Box
          sx={{
            width: "100%",
            position: "relative",
            mb: { xs: 2, md: 3 },
            mt: { xs: 2, md: 2 },
            borderRadius: 1,
            overflow: "hidden",
          }}
        >
          <Image
            src={`/assets/${storyDemo.imageNine}`}
            alt="story image nine"
            width={1152}
            height={500}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              display: "block",
            }}
          />
        </Box>
      )}
      {storyDemo.imageTen && (
        <Box
          sx={{
            width: "100%",
            position: "relative",
            mb: { xs: 2, md: 3 },
            mt: { xs: 2, md: 2 },
            borderRadius: 1,
            overflow: "hidden",
          }}
        >
          <Image
            src={`/assets/${storyDemo.imageTen}`}
            alt="story image ten"
            width={1152}
            height={500}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              display: "block",
            }}
          />
        </Box>
      )}

      {storyDemo.textPartFive && (
        <Typography
          color="text.primary"
          fontSize={{ xs: "14px", sm: "15px", md: "16px" }}
          sx={{
            mx: "auto",
            mt: { xs: 1, md: 2 },
            lineHeight: 1.7,
            wordBreak: "break-word",
          }}
        >
          {storyDemo.textPartFive}
        </Typography>
      )}
      {storyDemo.textPartSix && (
        <Typography
          color="text.primary"
          fontSize={{ xs: "14px", sm: "15px", md: "16px" }}
          sx={{
            mx: "auto",
            mt: { xs: 1, md: 2 },
            lineHeight: 1.7,
            wordBreak: "break-word",
          }}
        >
          {storyDemo.textPartSix}
        </Typography>
      )}
    </Container>
  );
};

const AuthorCard = ({ author }) => {
  const theme = useTheme();
  // Use custom breakpoint: collapsible when width <= 1855px
  const isLargeScreen = useMediaQuery("(min-width: 1856px)");
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [shouldShowCollapsible, setShouldShowCollapsible] = useState(false);

  useEffect(() => {
    // Check if screen is small enough that card would overlap content
    // On screens 1855px and below, enable collapsible behavior
    const checkScreenSize = () => {
      const shouldCollapse = !isLargeScreen;
      setShouldShowCollapsible(shouldCollapse);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [isLargeScreen]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  if (!author) return null;

  // On large screens, show normal fixed card
  if (isLargeScreen) {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 200,
          right: 40,
          border: "2px solid black",
          p: "8px 10px",
          width: 330,
          maxWidth: 330,
          boxSizing: "border-box",
          zIndex: 10,
          background: "white",
          maxHeight: "calc(100vh - 340px)",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <Box
          sx={{
            width: "100%",
            position: "relative",
            mb: 2,
            borderRadius: 1,
            overflow: "hidden",
            aspectRatio: "1 / 1",
          }}
        >
          <Image
            src={`/assets/${author.image}`}
            alt="author image"
            width={200}
            height={200}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>

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
  }

  // On small/medium screens, show collapsible card
  return (
    <>
      {/* Arrow button - always visible on right edge when collapsible */}
      {shouldShowCollapsible && (
        <IconButton
          onClick={toggleCollapse}
          sx={{
            position: "fixed",
            right: isCollapsed ? 0 : 330,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1001,
            background: "white",
            border: "2px solid black",
            borderRight: "none",
            borderRadius: "4px 0 0 4px",
            width: 40,
            height: 60,
            transition: "right 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.05)",
            },
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label={
            isCollapsed ? "Expand author card" : "Collapse author card"
          }
        >
          {isCollapsed ? (
            <ChevronLeftIcon sx={{ fontSize: 24, color: "black" }} />
          ) : (
            <ChevronRightIcon sx={{ fontSize: 24, color: "black" }} />
          )}
        </IconButton>
      )}

      {/* Author Card */}
      <Box
        sx={{
          position: "fixed",
          right: isCollapsed ? -330 : 0,
          top: 100,
          bottom: 0,
          width: 330,
          maxWidth: "calc(100vw - 40px)",
          border: "2px solid black",
          borderRight: "none",
          p: "8px 10px",
          boxSizing: "border-box",
          zIndex: 1000,
          background: "white",
          overflowY: "auto",
          transition: "right 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: isCollapsed ? "none" : "0 2px 8px rgba(0,0,0,0.15)",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <Box
          sx={{
            width: "100%",
            position: "relative",
            mb: 2,
            borderRadius: 1,
            overflow: "hidden",
            aspectRatio: "1 / 1",
          }}
        >
          <Image
            src={`/assets/${author.image}`}
            alt="author image"
            width={200}
            height={200}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>

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
    </>
  );
};
