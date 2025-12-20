// import React, { useEffect, useRef } from "react";
// import Choices from "choices.js";
// import "choices.js/public/assets/styles/choices.min.css";

// const SelectwithSearch = () => {
//   const selectRef = useRef(null);

//   useEffect(() => {
//     const choices = new Choices(selectRef.current, {
//       removeItemButton: true,
//       itemSelectText: "",
//       searchEnabled: true,
//       placeholder: true,
//       placeholderValue: "Select City",
//     });

//     return () => {
//       choices.destroy();
//     };
//   }, []);

//   return (
//     <div className="mb-3">
//       <label htmlFor="choices-single-groups" className="form-label text-muted">
//         Option Groups
//       </label>
//       <select
//         ref={selectRef}
//         id="choices-single-groups"
//         name="choices-single-groups"
//         className="form-control"
//         defaultValue=""
//       >
//         <option value="">Choose a city</option>
//         <optgroup label="UK">
//           <option value="London">London</option>
//           <option value="Manchester">Manchester</option>
//           <option value="Liverpool">Liverpool</option>
//         </optgroup>
//         <optgroup label="FR">
//           <option value="Paris">Paris</option>
//           <option value="Lyon">Lyon</option>
//           <option value="Marseille">Marseille</option>
//         </optgroup>
//         <optgroup label="DE" disabled>
//           <option value="Hamburg">Hamburg</option>
//           <option value="Munich">Munich</option>
//           <option value="Berlin">Berlin</option>
//         </optgroup>
//         <optgroup label="US">
//           <option value="New York">New York</option>
//           <option value="Washington" disabled>
//             Washington
//           </option>
//           <option value="Michigan">Michigan</option>
//         </optgroup>
//         <optgroup label="SP">
//           <option value="Madrid">Madrid</option>
//           <option value="Barcelona">Barcelona</option>
//           <option value="Malaga">Malaga</option>
//         </optgroup>
//         <optgroup label="CA">
//           <option value="Montreal">Montreal</option>
//           <option value="Toronto">Toronto</option>
//           <option value="Vancouver">Vancouver</option>
//         </optgroup>
//       </select>
//     </div>
//   );
// };

// export default SelectwithSearch;

import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Choices from "choices.js";
import "choices.js/public/assets/styles/choices.min.css";

const SelectwithSearch = () => {
  const selectRef = useRef(null);

  useEffect(() => {
    const choices = new Choices(selectRef.current, {
      removeItemButton: true,
      itemSelectText: "",
      searchEnabled: true,
      shouldSort: false, // disables sorting
    });

    return () => {
      choices.destroy();
    };
  }, []);

  return (
    <Wrapper>
      <div className="">
        <label htmlFor="choices-single-no-sorting" className="form-label">
          Gender <span className="text-danger">*</span>
        </label>
        <select
          ref={selectRef}
          id="choices-single-no-sorting"
          name="choices-single-no-sorting"
          className="form-control"
        >
          <option value="">Select Gender</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Third Gender">Third Gender</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .choices__inner {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    /* background-color: #f9f9f9; */
    background-color: transparent !important;
    padding: 7.5px 7.5px 3.75px;
    border: 1px solid #aab8c5 !important;
    border-radius: 2.5px;
    font-size: 14px;
    min-height: 44px;
    overflow: hidden;
  }

  .choices[data-type*="select-one"] .choices__input {
    display: block;
    width: 100%;
    /* padding: 10px !important; */
    border-bottom: 1px solid #aab8c5;
    background-color: transparent !important;
    margin: 0;
  }
`;

export default SelectwithSearch;
