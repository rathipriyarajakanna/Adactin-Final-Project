$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdactinPracticeEnd2End.feature");
formatter.feature({
  "line": 2,
  "name": "Adactin practicse application end to end testing",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@demo"
    }
  ]
});
formatter.before({
  "duration": 294000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify the adactin homepage functionality of the application",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;verify-the-adactin-homepage-functionality-of-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tc_1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enter the username \"rathipriya\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter the password \"rathi143\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 16476040400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rathipriya",
      "offset": 25
    }
  ],
  "location": "AdactinStepDefinition.user_enter_the_username_in_the_username_field(String)"
});
formatter.result({
  "duration": 3898175500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rathi143",
      "offset": 25
    }
  ],
  "location": "AdactinStepDefinition.user_enter_the_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 237276900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 8189506100,
  "status": "passed"
});
formatter.after({
  "duration": 252600,
  "status": "passed"
});
formatter.before({
  "duration": 70200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Launch hotel reservation application and checking the upcoming check in and check out dates",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-the-upcoming-check-in-and-check-out-dates",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@tc_2"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User enter the username \"rathipriya\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enter the password \"rathi143\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User select the check in date as \"03/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User select the check out date as \"01/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify that system gives an error saying check-in-date should not be later than check-out-date",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 1354030400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rathipriya",
      "offset": 25
    }
  ],
  "location": "AdactinStepDefinition.user_enter_the_username_in_the_username_field(String)"
});
formatter.result({
  "duration": 267439300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rathi143",
      "offset": 25
    }
  ],
  "location": "AdactinStepDefinition.user_enter_the_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 232137900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 7033218500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 362580200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 224203300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 190836400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 219312600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03/07/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 920026400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01/07/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 251960900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 5153565200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_that_system_gives_an_error_saying_check_in_date_should_not_be_later_than_check_out_date()"
});
formatter.result({
  "duration": 6416161600,
  "status": "passed"
});
formatter.after({
  "duration": 124300,
  "status": "passed"
});
formatter.before({
  "duration": 89300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Launch hotel reservation application and checking the previous check in and check out dates",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-the-previous-check-in-and-check-out-dates",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@tc_3"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User enter the username \"rathipriya\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User enter the password \"rathi143\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User select the check in date as \"19/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User select the check out date as \"23/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Verify that the error message saying enter the valid dates",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 1977520200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rathipriya",
      "offset": 25
    }
  ],
  "location": "AdactinStepDefinition.user_enter_the_username_in_the_username_field(String)"
});
formatter.result({
  "duration": 264708000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rathi143",
      "offset": 25
    }
  ],
  "location": "AdactinStepDefinition.user_enter_the_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 234019900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 1581500300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 215701800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 211139000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 203879900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 214175300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/06/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 246846200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23/06/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 239707000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 1267599100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_that_the_error_message_saying_enter_the_valid_dates()"
});
formatter.result({
  "duration": 30900,
  "status": "passed"
});
formatter.after({
  "duration": 144200,
  "status": "passed"
});
formatter.before({
  "duration": 134900,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Launch hotel reservation application for checking the hotel location and hotel name",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-for-checking-the-hotel-location-and-hotel-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@tc_4"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "User enter the username \"rathipriya\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "User enter the password \"rathi143\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User select the check in date as \"27/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User select the check out date as \"28/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Verify that hotel location and hotel name displayed is the same as selected in search Hotel form",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 535607200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rathipriya",
      "offset": 25
    }
  ],
  "location": "AdactinStepDefinition.user_enter_the_username_in_the_username_field(String)"
});
formatter.result({
  "duration": 220349000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rathi143",
      "offset": 25
    }
  ],
  "location": "AdactinStepDefinition.user_enter_the_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 219523900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 1248035300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 208020400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 210187900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 204718400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 193073300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "27/06/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 235695900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "28/06/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 235829600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 1073159100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_that_hotel_location_and_hotel_name_displayed_is_the_same_as_selected_in_search_Hotel_form()"
});
formatter.result({
  "duration": 59471700,
  "status": "passed"
});
formatter.after({
  "duration": 88800,
  "status": "passed"
});
formatter.before({
  "duration": 81600,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Launch hotel reservation application for checking the selected check in and check out date validation",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-for-checking-the-selected-check-in-and-check-out-date-validation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 56,
      "name": "@tc_5"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "User enter the username \"rathipriya\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "User enter the password \"rathi143\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User select the check in date as \"27/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "User select the check out date as \"28/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Verify the check in and check out date displayed is the same as selected in search Hotel form",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 544447600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rathipriya",
      "offset": 25
    }
  ],
  "location": "AdactinStepDefinition.user_enter_the_username_in_the_username_field(String)"
});
formatter.result({
  "duration": 256130100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rathi143",
      "offset": 25
    }
  ],
  "location": "AdactinStepDefinition.user_enter_the_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 212212000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 1952152700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 220931300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 193787400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 193572200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 200722600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "27/06/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 247651600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "28/06/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 229271800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 920324000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_the_check_in_and_check_out_date_displayed_is_the_same_as_selected_in_search_Hotel_form()"
});
formatter.result({
  "duration": 59156200,
  "status": "passed"
});
formatter.after({
  "duration": 76900,
  "status": "passed"
});
});