import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";

const Timeline = () => {
  return (
    <div className="w-[70%]">
      <VerticalTimeline lineColor="#e9ecef">
        <VerticalTimelineElement
            contentArrowStyle={{ display: "none" }}

          className="vertical-timeline-element--work "
          contentStyle={{
            boxShadow: `var(--shadow)`,
            backgroundColor: `var(--clr-bg)`,
            marginLeft: '10px',
            color: `var(--clr-fg-alt)`,
            textAlign: "center",
          }}
          date="2022 - present"
          iconStyle={{ background: "#839788", color: "#fff" }}
          icon={<MdWork/>}
        >
          <h3 className="font-bold text-center text-gray-600 vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="text-xs text-center text-gray-300 vertical-timeline-element-subtitle">Kraków, Poland</h4>
          <h5 className="mt-2 text-sm text-center text-gray-400">
            React, Typescript, C#, Sharepoint Framework, Adaptive Cards
            Extensions, Specflow, Xamarin.Android
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
                    contentArrowStyle={{ display: "none" }}

          className="vertical-timeline-element--work"
          contentStyle={{
            boxShadow: `var(--shadow)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-fg-alt)`,
          }}
          date="2022 - 2023"
          iconStyle={{ background: "#839788", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="font-bold text-center text-gray-600 vertical-timeline-element-title">
            {" "}
            Università degli Studi di Padova
          </h3>
          <h5 className="mt-2 text-sm text-center text-gray-400 ">Erasmus exchange</h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
                    contentArrowStyle={{ display: "none" }}

          className="vertical-timeline-element--work"
          contentStyle={{
            boxShadow: `var(--shadow)`,
            backgroundColor: `var(--clr-bg)`,
            marginLeft: '10px',
            color: `var(--clr-fg-alt)`,
          }}
          date="2018 - 2022"
          iconStyle={{ background: "#839788", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="font-bold text-center text-gray-600 vertical-timeline-element-title">
            {" "}
            Pedagogical University of Krakow
          </h3>
          <h5 className="mt-2 text-sm text-center text-gray-400">Technical and IT Technology Education, Bachelor Degree</h5>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
