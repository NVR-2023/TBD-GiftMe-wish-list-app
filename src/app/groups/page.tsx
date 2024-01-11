"use client";
import React from 'react';
import NavBar from '../_components/Layout/navbar/navbar';
import SideBar from '../_components/Layout/groups-sidebar/sidebar';
import TabFiltering from '../_components/Layout/groups-tab-filtering/tabFiltering';

interface GroupsProps { }

const Groups: React.FC<GroupsProps> = () => {
  return (
    <div>
      <NavBar />
      <div className="relative top-16 lg:flex">
        <SideBar />
        <div className="w-full h-full p-1 m-1">
          <TabFiltering />
          <div className="items-center justify-center max-h-[calc(100vh-120px)] overflow-y-auto p-8 mr-5 border-4 border-dotted lg:p-10">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum
              The Extremes of Good and Evil by Cicero, written in 45 BC. This
              book is a treatise on the theory of ethics, very popular during
              the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor
              sit amet.., comes from a line in section 1.10.32.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum
              The Extremes of Good and Evil by Cicero, written in 45 BC. This
              book is a treatise on the theory of ethics, very popular during
              the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor
              sit amet.., comes from a line in section 1.10.32.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum
              The Extremes of Good and Evil by Cicero, written in 45 BC. This
              book is a treatise on the theory of ethics, very popular during
              the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor
              sit amet.., comes from a line in section 1.10.32.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum
              The Extremes of Good and Evil by Cicero, written in 45 BC. This
              book is a treatise on the theory of ethics, very popular during
              the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor
              sit amet.., comes from a line in section 1.10.32.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum
              The Extremes of Good and Evil by Cicero, written in 45 BC. This
              book is a treatise on the theory of ethics, very popular during
              the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor
              sit amet.., comes from a line in section 1.10.32.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum
              The Extremes of Good and Evil by Cicero, written in 45 BC. This
              book is a treatise on the theory of ethics, very popular during
              the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor
              sit amet.., comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groups;
