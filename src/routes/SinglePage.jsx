import { useParams } from 'react-router-dom';

const aboutData = [
  {
    slug: 'about-app',
    title: 'About the app',
    description:
      "This application lets us add to-dos, edit, and delete items. Log in to see the delete feature. It also persists to-dos in the browser's local storage for a subsequent visit.",
  },
  {
    slug: 'about-developer',
    title: 'About the developer',
    description:
      'My name is Mussie Kahsay, full-stack web developer and this React To-Do list app is developed based on the tutorial from https://ibaslogic.com/',
  },
];

const SinglePage = () => {
  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;
  return (
    <div className="main_content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
export default SinglePage;
