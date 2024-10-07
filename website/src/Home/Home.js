import './Home.css';
import ID from "../Images/ID.jpg";
function Home() {
  return (
    <div className="Home">
        <img src={ID}id="imag"alt='ID'/>
        <about>
            <abt>Hello! My name is Andrew Sanchez and I am a hardworking prosepective software engineer with an eager mind and eye for detail. 
                I graduated from the University of California Santa Cruz with a bachelors degree in Computer Science, becoming proficient in subjects
                such as database systems, artificial intelligence, and web design through the projects I built.
                Personally, my hobbies include art, hiking, electronics, and photography- feel free to view my photo of the day at the bottom of page!</abt>
        </about>
        <sb></sb>
        <h1>Projects</h1>
        <ul className="Projects">
            <h3>Reciplan</h3>
            <em>Website</em>
            <p>- A web database of recipes used to aid in the making of diffrerent meals while saving money and time</p>
            <p>- Included a user login system to allow the ability to save favorite recipes and relevant dietary restrictions</p>
            <p>- Addition of a decision making system to assist inquiring users on deciding on a meal whenever neccessary</p>
            <h3>Neuropets</h3>
            <em>Web Application</em>
            <p>- A habit tracking app designed to help users cement habits through task completion and repetition</p>
            <p>- Inclusion of small pets who grow and mature in parallel with habits to incentivise the user's own growth</p>
            <p>- Implementation of cosmetic upgrades for your pets with a potential avenue for monetization</p>
            <h3>Gracehacks</h3>
            <em>Website / Academic Organization</em>
            <p>- A non-profit organization of students to help underprivleged induviduals learn and develop coding skills</p>
            <p>- Involves coordation of free public events for others achieved through sponsorship and fundraising</p>
            <p>- Created and deployed the club website in collaboration with other members of the team.</p>
            <h3>This Website!</h3>
            <em>Website</em>
            <p>- Personal website created from scratch to display personal goals and achievements</p>
            <p>- Utilizes multiple web pages and to link both personal and professional information</p>
            <p>- Created through the use of node.js and react</p>
        </ul>
        <sb></sb>
        <h1>Work History</h1>
        <ul className="Work">
            <h3>United States Postal Service</h3>
            <em>December 2023 - Present</em>
            <p>- Direct the flow of incoming mail and packages to the appropriate residences and postal boxes</p>
            <p>- Ensure the accurate delivery of parcels while redirecting missent and incorrect mail as needed</p>
            <p>- Operate the register at the counter to offer postage and shipping services for customers</p>
            <h3>Target</h3>
            <em>November 2022 - October 2023</em>
            <p>- Sort shipments of wares and merchandise from inbound trucks for distribution within store</p>
            <p>- Swiftly stock and organize assigned aisles and sections of store to be neat and presentable</p>
            <p>- Assist customers with any and all questions and needs regarding store products and services</p>
            <h3>Costco Wholesale</h3>
            <em>September 2021 - April 2022</em>
            <p>- Transfer industrial pallets of merchandise to floor for organization to upwards of six feet high</p>
            <p>- Operate Costco terminals to search for and print prices for new products within the store</p>
            <p>- Assist customers at checkout to ensure all items purchased are properly bagged and placed in carts</p>
            <h3>Santa Cruz City Schools</h3>
            <em>January 2020 - May 2021</em>
            <p>- Coordinate study groups of up to six students to iteratively guide to solutions in several academic subjects</p>
            <p>- Assist struggling students through the use of multiple examples with step by step solutions as neccessary</p>
            <p>- Communicate with instructors to ensure learning while finding new means to improve student success</p>
        </ul>
        <sb></sb>
    </div>
  );
}

export default Home;
