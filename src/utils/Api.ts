// import { Project } from 'assets/Projects';
// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://127.0.0.1:3001/',
// });

export default async function getProjects() {
  // return (await instance.get<Project[]>('/api/featured')).data;
  return JSON.parse("[{\"title\":\"Revel.xyz | Digital Assets Trading App\",\"description\":\"A React Native-based iOS and Android application for trading media assets such as photos and videos. The app allows users to collect and share minted assets. I used Firebase and GraphQL for the back end. I also implemented an asset creation AI.\",\"source\":\"https://apps.apple.com/us/app/revel-xyz/id1614465131?mt=8\",\"createdAt\":\"2023-08-01T00:00:00.000Z\",\"platform\":\"researchgate\"},{\"title\":\"Yousound | Music Streaming and Shopping Application\",\"description\":\"A React Native-based iOS music album and shopping application. I developed the app from scratch using my experience in music players, audio streaming play, stripe payment integration, shopping implementation, and REST API integration.\",\"source\":\"https://www.yousound.com/\",\"createdAt\":\"2020-04-01T00:00:00.000Z\",\"platform\":\"researchgate\"},{\"title\":\"Trava | Plan Your Next Trip\",\"description\":\"I worked on the Trava app as a React Native dev. I built those slick UIs you see, made sure all the cool features like activity recommendations, group voting, and itinerary creation work flawlessly. Also, integrated the chat and social sharing for memories. Basically, I made sure the app is smooth and fun to use.\",\"scource\":\"https://apps.apple.com/us/app/trava-plan-your-next-trip/id1597762077\",\"createdAt\":\"2024-06-03T00:00:00.000Z\",\"platform\":\"researchgate\"},{\"title\":\"ezCater - Business Catering\",\"description\":\"A React Native-based mobile food delivery service product for iOS and Android. As the front-end mobile engineer, I worked with React Native tasks, including the REST API client. I also employed test-driven and Agile software development for CI/CD.\",\"source\":\"https://apps.apple.com/us/app/ezcater-business-catering/id1162865183\",\"createdAt\":\"2022-11-11T00:00:00.000Z\",\"platform\":\"researchgate\"},{\"title\":\"Sea Moss and Bladderwrack | Shopping\",\"source\":\"https://organimo.com/\",\"description\":\"[ ThreeJS, GSAP, CSS, PHP ] <br/> I leveraged CSS, GSAP and 3D(Three.js) to build a visually appealing UI and high-performance animation. You will like it, our all clients loved them in actuality\",\"createdAt\":\"2023-10-24T23:42:24Z\",\"thumbnail\":\"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0fecdec7-e8a4-455a-823b-167d5bbd377e/dffx64v-fc6ed9ce-5cd6-4b09-bfd6-7e1e3ef4077c.png/v1/fill/w_300,h_199,q_70,strp/windows_11_fluent_wallpaper_by_bsodium_dffx64v-200h.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODQ4IiwicGF0aCI6IlwvZlwvMGZlY2RlYzctZThhNC00NTVhLTgyM2ItMTY3ZDViYmQzNzdlXC9kZmZ4NjR2LWZjNmVkOWNlLTVjZDYtNGIwOS1iZmQ2LTdlMWUzZWY0MDc3Yy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sApPeErBl4DKa2m5USlrWjrjJm3J-qsVxCCSOElBe9Y\",\"platform\":\"deviantart\",\"interactions\":{\"likes\":5}},{\"title\":\"Shashlikyan | Restaurant Service\",\"source\":\"https://shashlikyan.ua/\",\"description\":\"[ VueJS, NuxtJS, NodeJS, GSAP ] <br/>I used GSAP and CSS to make the header shrink on scroll, add a parallax effect to the hero section, create interactive gallery hovers, smooth scroll navigation, and fade-in content as you scroll to keep things lively and engaging.\",\"createdAt\":\"2024-01-19T23:42:24Z\",\"thumbnail\":\"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0fecdec7-e8a4-455a-823b-167d5bbd377e/df9kl4k-a9ec10b3-1314-4b41-8535-4c2b3eb19860.png/v1/fill/w_120,h_200,q_70,strp/overflowing_minds_by_bsodium_df9kl4k-200h.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjAwMCIsInBhdGgiOiJcL2ZcLzBmZWNkZWM3LWU4YTQtNDU1YS04MjNiLTE2N2Q1YmJkMzc3ZVwvZGY5a2w0ay1hOWVjMTBiMy0xMzE0LTRiNDEtODUzNS00YzJiM2ViMTk4NjAucG5nIiwid2lkdGgiOiI8PTEyMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.pqqkDkq53ByV5TP7CScD0VujXfvvjJNHLnbX0xblxQI\",\"platform\":\"deviantart\",\"interactions\":{\"likes\":0}},{\"title\":\"Parsley Health | Healthcare\",\"source\":\"https://www.parsleyhealth.com/\",\"description\":\"[ React, TailwindCSS, Gatsby ] <br/> Parsley Health is a healthcare provider that offers a holistic, integrated approach to primary care. \",\"createdAt\":\"2022-04-20T23:42:24Z\",\"thumbnail\":\"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0fecdec7-e8a4-455a-823b-167d5bbd377e/dex0j9k-c92e41f6-2955-4210-b230-207eecce7f9b.png/v1/fill/w_300,h_180,q_70,strp/suborbital_by_bsodium_dex0j9k-200h.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvMGZlY2RlYzctZThhNC00NTVhLTgyM2ItMTY3ZDViYmQzNzdlXC9kZXgwajlrLWM5MmU0MWY2LTI5NTUtNDIxMC1iMjMwLTIwN2VlY2NlN2Y5Yi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.PSjruWda3BfFcRW1Y02MqYUjcVs-t8AdXWpgVwNO1fE\",\"platform\":\"deviantart\",\"interactions\":{\"likes\":5}},{\"title\":\"BeatStars | Digital Production Marketplace\",\"source\":\"https://www.beatstars.com\",\"description\":\"[ Angular, AWS, Firebase, Stripe ] <br/> BeatStars is a digital production marketplace that allows music producers to license and sell beats and give away free beats.\",\"createdAt\":\"2024-04-02T23:42:24Z\",\"thumbnail\":\"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0fecdec7-e8a4-455a-823b-167d5bbd377e/decoypg-4974f36f-ad55-4a5e-b0f6-59ff7bded697.png/v1/fill/w_300,h_169,q_70,strp/post_apocalyptic_paradox_by_bsodium_decoypg-200h.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMGZlY2RlYzctZThhNC00NTVhLTgyM2ItMTY3ZDViYmQzNzdlXC9kZWNveXBnLTQ5NzRmMzZmLWFkNTUtNGE1ZS1iMGY2LTU5ZmY3YmRlZDY5Ny5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.iLwskZQvOM_ZOlpzSQoTpaCmvF5NpxBAebpsT5zDu0s\",\"platform\":\"deviantart\",\"interactions\":{\"likes\":1}},{\"title\":\"DriveFlux | Car Subscription Service\",\"source\":\"https://driveflux.com/\",\"description\":\"[ React, NextJS, NodeJS, Chakra UI ] <br/> DriveFlux is a car subscription service that offers a convenient and affordable way to drive without the hassle of traditional car ownership.\",\"createdAt\":\"2021-12-09T23:42:24Z\",\"thumbnail\":\"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0fecdec7-e8a4-455a-823b-167d5bbd377e/de43rq5-ce6ef6f1-ebff-4832-9748-5c64b252f05a.jpg/v1/fill/w_300,h_169,q_70,strp/where_the_sun_never_sets_by_bsodium_de43rq5-200h.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMGZlY2RlYzctZThhNC00NTVhLTgyM2ItMTY3ZDViYmQzNzdlXC9kZTQzcnE1LWNlNmVmNmYxLWViZmYtNDgzMi05NzQ4LTVjNjRiMjUyZjA1YS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.M6Q4BJ2BKDHeZnNV-De5vhAfz0tW4viT9a3Q1HxWHWE\",\"platform\":\"deviantart\",\"interactions\":{\"likes\":5}},{\"title\":\"Homelister | Real Estate\",\"source\":\"https://www.homelister.com/\",\"description\":\"[ React, NextJS, NodeJS ] <br/> Homelister is an online home-selling platform that provides homeowners with the tools and professional assistance they need to sell their homes quickly.\",\"createdAt\":\"2023-02-28T23:42:24Z\",\"thumbnail\":\"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0fecdec7-e8a4-455a-823b-167d5bbd377e/ddvtl5u-c8ebff87-8547-4d83-b91b-2451065add62.png/v1/fill/w_300,h_162,q_70,strp/giants_of_steel_by_bsodium_ddvtl5u-200h.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODYzIiwicGF0aCI6IlwvZlwvMGZlY2RlYzctZThhNC00NTVhLTgyM2ItMTY3ZDViYmQzNzdlXC9kZHZ0bDV1LWM4ZWJmZjg3LTg1NDctNGQ4My1iOTFiLTI0NTEwNjVhZGQ2Mi5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Aawiv8jpA0z2t5aa76h-D6slSR4tZ2KtKARQDfPmuts\",\"platform\":\"deviantart\",\"interactions\":{\"likes\":34}},{\"title\":\"Hawkker | Food Discovery Application\",\"source\":\"https://hawkker.com/\",\"description\":\"[ React, NextJS, NodeJS, TailwindCSS, MUI, AWS ] <br/> Hawkker is a food discovery platform that connects food vendors with customers.\",\"createdAt\":\"2022-05-14T23:42:24Z\",\"thumbnail\":\"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0fecdec7-e8a4-455a-823b-167d5bbd377e/ddvk2f2-8c7e0c22-986d-4c72-bc49-e9b5ec419e6c.png/v1/fill/w_300,h_169,q_70,strp/magic_in_the_dark_by_bsodium_ddvk2f2-200h.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMGZlY2RlYzctZThhNC00NTVhLTgyM2ItMTY3ZDViYmQzNzdlXC9kZHZrMmYyLThjN2UwYzIyLTk4NmQtNGM3Mi1iYzQ5LWU5YjVlYzQxOWU2Yy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.XnjlhW59EaMLG53HS8D5XTptXA_HCz4rL5UmKiIeuJ4\",\"platform\":\"deviantart\",\"interactions\":{\"likes\":3}},{\"title\":\"Brick pool for life\",\"source\":\"https://egea.vercel.app\",\"demo\":\"https://www.figma.com/design/4tphQThKuZIQkO6uTNyO93/Programovanie?node-id=0-1&t=lGFI2fz5fQ3eDqBb-0\",\"description\":\"<p>[React, NextJS, NodeJS, TailwindCSS, Ant Design] <br/> Designed and deployed to provide users with a streamlined and interactive experience. The design was crafted in Figma, allowing for a collaborative and iterative design process, ensuring the final product is both aesthetically pleasing and functional.</p>\",\"createdAt\":\"2023-03-28T08:52:29.491Z\",\"updatedAt\":\"2023-03-28T08:52:29.640Z\",\"thumbnail\":\"https://s3-alpha.figma.com/hub/file/5433111829/024615a0-6f36-441a-aefa-e097765b8639-cover.png\",\"interactions\":{\"likes\":2},\"platform\":\"figma\"},{\"title\":\"Bioteco | Life Science\",\"source\":\"https://www.bioteco.sk/en\",\"demo\":\"https://www.figma.com/design/SPuNKtE3AQhKydEBzoGIIm/BIOTECO-programovanie?m=dev\",\"description\":\"<p>[React, NextJS, NodeJS, TailwindCSS, Ant Design] <br/> The project encompassed both the design and development of a website, with the Figma link representing the design phase and showcasing the final, deployed website. The process involved translating the Figma designs into a functional and responsive website that aligns with the client's vision, ensuring a seamless user experience from design to development.</p>\",\"createdAt\":\"2023-06-11T08:52:29.491Z\",\"updatedAt\":\"2023-06-11T08:52:29.640Z\",\"thumbnail\":\"https://s3-alpha.figma.com/hub/file/5433111829/024615a0-6f36-441a-aefa-e097765b8639-cover.png\",\"interactions\":{\"likes\":2},\"platform\":\"figma\"}]");
}