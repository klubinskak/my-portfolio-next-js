import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { IoSchool } from 'react-icons/io5';

const Timeline = () => {
  return (
    <div className="w-[70%]">
      <VerticalTimeline lineColor="#e9ecef">

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - now"
          iconStyle={{ background: "#839788", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle text-gray-400 text-sm">Capgemini</h4>
          <p>
            React, Typescript, C#, Sharepoint Framework, Adaptive Cards
            Extensions, Specflow, Xamarin.Android
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2021"
          iconStyle={{ background: "#839788", color: "#fff" }}
          icon={<IoSchool />}
        >
          <h3 className="vertical-timeline-element-title">Technical and IT Technology Education</h3>
          <h4 className="vertical-timeline-element-subtitle text-gray-400 text-sm">Erasmus exchange</h4>
          <p>
            Università degli Studi di Padova
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "#839788", color: "#fff" }}
          icon={<IoSchool />}
        >
          <h3 className="vertical-timeline-element-title">Technical and IT Technology Education</h3>
          <h4 className="vertical-timeline-element-subtitle text-gray-400 text-sm">Bachelor Degree</h4>
          <p>
            Pedagogical University of Krakow
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
