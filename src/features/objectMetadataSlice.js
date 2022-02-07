import { createSlice } from "@reduxjs/toolkit";

/* metadata schema
  metadata: [
    {
    name: "Account",
    data: {}
    },
    {
    name: "Contact",
    data: {}
    },
  ]
  };
*/

// sets metadata state
export const objectMetadataSlice = createSlice({
  name: "objectMetadata",
  initialState: {
    metadata: [],
  },
  reducers: {
    addMetadata: (state, { payload }) => {
      /*
        dispatch(addMetata(
          {
            objName:  "someObjectName",
            metadata: {}  // metadata object
          }
        )
      */

      return {
        // spreading the existing state
        ...state,
        // adding payload to metadata array
        metadata: [...state.metadata, payload],
      };
    },
    deleteMetadata: (state, { payload }) => {
      /*
        dispatch(deleteMetadata('objectName'))
      */
      return {
        // spreading the existing state
        ...state,
        // returns a new filtered metadata array
        objectMetadata: [
          ...state.objectMetadata,
          state.filter.objectMetadata((metadata) => metadata.name !== payload),
        ],
      };
    },
    updateMetadata: (state, { payload }) => {
      /*
        dispatch(updateMetata(
          {
            objName:  "someObjectName",
            metadata: {}  // metadata object
          }
        )
      */

      // finding index of the item
      const index = state.objectMetadata.findIndex(
        (metadata) => metadata.name !== payload.objName
      );

      // making a new array from existing state
      const newMetadataArray = [...state.objectMetadata];

      // update the state for a given object
      newMetadataArray[index] = payload;

      return {
        ...state,
        objectMetadata: newMetadataArray,
      };
    },
  },
});

// Extract and export each action creator by name
export const { addMetadata, updateMetadata, deleteMetadata } =
  objectMetadataSlice.actions;

// Export the reducer, either as a default or named export
export default objectMetadataSlice.reducer;
