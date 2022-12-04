import { createSelector } from "@reduxjs/toolkit";

export const sectionSelector = (state) => state.section.isLoggedIn;
export const employeeInfoSelector = (state) => state.section.employeeInfo;
