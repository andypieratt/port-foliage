import React from "react";

const styles = {
  alignCenter: {
    textAlign: "center",
  },
  section: {
    marginLeft: "2rem",
  },
};

export default function Resume() {
  return (
    <div>
      <h1 style={styles.alignCenter}>Resume</h1>
      <br></br>
      <h3 style={styles.alignCenter}>Education</h3>
      <section style={styles.section}>
        <br></br>
        <h4>Univeristy of Denver (2022)</h4>
        <h5>
          Certification in Full-Stack Web Development from the DU Full-Stack
          Coding Bootcamp
        </h5>
        <ul>
          Proficiencies in Frontend Development
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Bootstrap</li>
        </ul>
        <ul>
          Proficiencies in Backend Development
          <li>GraphQL</li>
          <li>mySQL</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Socket.io</li>
          <li>Express</li>
        </ul>
      </section>
      <section style={styles.section}>
        <h4>Univeristy of Colorado, Denver (2017-2021)</h4>
        <h5>Bachelor of Science in Music Business</h5>
        <p>
          Relevant Coursework: Marketing, Operations/Venue Management and
          Promotion, Entrepreneurship, Business in the Digital Age, and Music
          Law.
        </p>
        <ul>
          Awards and Honors:
          <li>Graduated Cum Laude.</li>
          <li>Member of the National Society for Collegiate Scholars.</li>
        </ul>
      </section>
      <br></br>
      <h3 style={styles.alignCenter}>Experience</h3>
      <section style={styles.section}>
        <br></br>
        <h4>Bertram Capital Finance (2019-2022)</h4>
        <h5>Floor Manager</h5>
        <ul>
          <li>Demonstrated ability to successfully lead and manage others.</li>
          <li>Operated in a high volume and high energy start-up business.</li>
          <li>
            Proved the ability to understand products and successfully complete
            sales.
          </li>
          <li>
            Achieved two promotions in the span of two years (Front-Desk, Sales
            Associate, and Floor Manager).
          </li>
          <li>Verified deposits and large quantity cash-handling.</li>
          <li>
            Deescalated tensions and resolved conflicts between employees and
            customers.
          </li>
        </ul>
      </section>
      <section style={styles.section}>
        <br></br>
        <h4>Outlaw Vintage Co. (2018-Present)</h4>
        <h5>Vintage Curator and Manager</h5>
        <ul>
          <li>Creator and manager of my own vintage store and archive.</li>
          <li>
            Proficient in photography, social media curation, and
            inventory/website upkeep.
          </li>
          <li>
            Knowledgeable in curating, sourcing, and merchandising vintage and
            sustainable clothing.
          </li>
        </ul>
        <br></br>
      </section>
      <h3 style={styles.alignCenter}>Skills and Interests</h3>
      <section style={styles.section}>
        <br></br>
        <h5>Interests:</h5>
        <li>
          Heavy Metal/Rock drummer, counter-culture enthusiast, and collector
          and re-seller of vintage clothing and furniture
        </li>
      </section>
    </div>
  );
}
