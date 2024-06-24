import React from "react";
import Footer from "../Footer";
import AssignmentPages from "../AssignmentPages";

function SpringMediaConnect() {
  return (
    <div>
      <AssignmentPages
        imgs={[
          "/assignments/springmediaconnect.PNG",
          "/assignments/springmediaconnect2.PNG",
          "/assignments/springmediaconnect3.PNG",
        ]}
        head="Spring Media Connect"
        text="I went to the Spring career fair for tech. It was my second career fair this school year so I knew what to expect. I expected the representatives to not want to recruit freshmen, but this year the name tag did not include the graduation year, but rather the major and name. Perhaps this is because it was the tech fair and not the computer science only fair. I talked to a representative from a naval academy offering internships and full-time positions for people with Java experience such as myself so I wanted to give them my resume. I also talked to a representative who was an alumnus of Maryland for an Environmental Science company.  He was very nice and encouraged others and me to apply for all the positions available. On my way out I met a table for a start-up company, looking for graduates, but she was still very nice in explaining to me what the company does.  Overall the people at the career fair were pretty nice, I felt more prepared this time around and did not feel as scared. 
 "
      />

      <Footer />
    </div>
  );
}

export default SpringMediaConnect;
