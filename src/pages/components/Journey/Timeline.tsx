import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { IoSchool } from 'react-icons/io5';
import { useTheme } from "next-themes";

const Timeline = () => {
  const { theme } = useTheme();
  const [themeStatus, setThemeStatus] = useState<any | null>(null);


  useEffect(() => {
    setThemeStatus(theme);
  }, [theme])

  return (
    <div className="w-[70%]">
      <VerticalTimeline lineColor="#e9ecef">
      <VerticalTimelineElement
          id="vertical-timeline"
          contentStyle={{
            background: themeStatus === 'dark' ? '#22223b' : '#F3F4F6', color: theme === 'dark' ? 'white' : 'black'
          }}
          contentArrowStyle={{ borderRight: '#22223b' }}

          className="vertical-timeline-element--education"
          date="november 2023 - now"
          iconStyle={{ background: "#839788", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Junior Application Developer</h3>
          <h4 className="text-sm text-gray-400 vertical-timeline-element-subtitle">Westinghouse</h4>
          <p>
            Angular, Typescript, C#, ASP.NET Core, SQL
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          id="vertical-timeline"
          contentStyle={{
            background: themeStatus === 'dark' ? '#22223b' : '#F3F4F6', color: theme === 'dark' ? 'white' : 'black'
          }}
          contentArrowStyle={{ borderRight: '#22223b' }}

          className="vertical-timeline-element--education"
          date="march 2022 - october 2023"
          iconStyle={{ background: "#839788", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Junior Software Developer</h3>
          <h4 className="text-sm text-gray-400 vertical-timeline-element-subtitle">Capgemini</h4>
          <p>
            React, Typescript, C#, Sharepoint Framework, Adaptive Cards
            Extensions, Specflow, Xamarin.Android
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          id="vertical-timeline"
          className="vertical-timeline-element--education"
          contentStyle={{
            background: themeStatus === 'dark' ? '#22223b' : '#F3F4F6', color: theme === 'dark' ? 'white' : 'black'
          }}
          date="2021 - 2022"
          iconStyle={{ background: "#839788", color: "#fff" }}
          icon={<IoSchool />}
        >
          <h3 className="vertical-timeline-element-title">Technical and IT Technology Education</h3>
          <h4 className="text-sm text-gray-400 vertical-timeline-element-subtitle">Erasmus exchange</h4>
          <p>
            Università degli Studi di Padova
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          id="vertical-timeline"
          className="vertical-timeline-element--education"
          contentStyle={{
            background: themeStatus === 'dark' ? '#22223b' : '#F3F4F6', color: theme === 'dark' ? 'white' : 'black'
          }}
          date="2018 - 2022"
          iconStyle={{ background: "#839788", color: "#fff" }}
          icon={<IoSchool />}
        >
          <h3 className="vertical-timeline-element-title">Technical and IT Technology Education</h3>
          <h4 className="text-sm text-gray-400 vertical-timeline-element-subtitle">Bachelor Degree</h4>
          <p>
            Pedagogical University of Krakow
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
