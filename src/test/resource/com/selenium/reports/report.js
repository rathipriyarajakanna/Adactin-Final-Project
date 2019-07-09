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
  "duration": 5502583800,
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
  "duration": 1367120400,
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
  "duration": 406506400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 1134939000,
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
  "duration": 260445600,
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
  "duration": 281528400,
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
  "duration": 235332800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 436496400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 344801600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 213174800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 205396100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 199182300,
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
  "duration": 305836500,
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
  "duration": 262236400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 162777800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_that_system_gives_an_error_saying_check_in_date_should_not_be_later_than_check_out_date()"
});
formatter.result({
  "duration": 2217407000,
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
  "duration": 193891200,
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
  "duration": 264205000,
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
  "duration": 226136100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 490830900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 192211900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 190559200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 206360500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 193496300,
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
  "duration": 256969600,
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
  "duration": 252492800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 566656200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_that_the_error_message_saying_enter_the_valid_dates()"
});
formatter.result({
  "duration": 48700,
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
  "duration": 190569100,
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
  "duration": 240489400,
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
  "duration": 224143900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 567176700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 191202500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 186030500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 199036900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 184919100,
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
  "duration": 247524800,
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
  "duration": 229035000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 618555700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_that_hotel_location_and_hotel_name_displayed_is_the_same_as_selected_in_search_Hotel_form()"
});
formatter.result({
  "duration": 64120300,
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
  "duration": 982509000,
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
  "duration": 233895500,
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
  "duration": 233753900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 1936197200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 177484100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 189093200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 190288000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 188315400,
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
  "duration": 251770600,
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
  "duration": 273626100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 684038000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_the_check_in_and_check_out_date_displayed_is_the_same_as_selected_in_search_Hotel_form()"
});
formatter.result({
  "duration": 51407100,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "Launch hotel reservation application for checking the no of rooms selected",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-for-checking-the-no-of-rooms-selected",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 71,
      "name": "@tc_6"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "User enter the username \"rathipriya\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "User enter the password \"rathi143\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "User select the check in date as \"19/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "User select the check out date as \"23/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "Verify the no of rooms selected in search Hotel form",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 311950200,
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
  "duration": 228946000,
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
  "duration": 215951100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 454894200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 200519600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 200259800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 175727500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 199557700,
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
  "duration": 262335800,
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
  "duration": 230750100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 704958900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_the_no_of_rooms_selected_in_search_Hotel_form()"
});
formatter.result({
  "duration": 34305200,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "Launch hotel reservation application for checking the no of rooms selected",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-for-checking-the-no-of-rooms-selected",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 86,
      "name": "@tc_7"
    }
  ]
});
formatter.step({
  "line": 88,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 89,
  "name": "User enter the username \"rathipriya\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "User enter the password \"rathi143\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User select the check in date as \"19/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User select the check out date as \"23/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "Verify the rooms type selected in search Hotel form",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 174149900,
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
  "duration": 277834500,
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
  "duration": 214995500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 445938600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 198910900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 194107600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 198720800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 217902200,
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
  "duration": 289638900,
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
  "duration": 277639000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 673660400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_the_rooms_type_selected_in_search_Hotel_form()"
});
formatter.result({
  "duration": 30555300,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "Launch hotel reservation application and checking priceexcelGST",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-priceexcelgst",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 102,
      "name": "@tc_8"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 105,
  "name": "User enter the username \"rathipriya\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "User enter the password \"rathi143\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "User select the check in date as \"19/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "User select the check out date as \"23/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "Verify that totalprice(excl.GST) is being calculated as (price-per-night*noof-rooms*no-of-days)",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 215066500,
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
  "duration": 338110000,
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
  "duration": 431251000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 647728300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 189977900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 203511500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 192811600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 174188800,
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
  "duration": 236929100,
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
  "duration": 238258900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 1159308000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 130024000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 686654400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_that_totalprice_excl_GST_is_being_calculated_as_price_per_night_noof_rooms_no_of_days()"
});
formatter.result({
  "duration": 121536900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 120,
  "name": "Launch hotel reservation application and checking with GST calculation",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-with-gst-calculation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 119,
      "name": "@tc_9"
    }
  ]
});
formatter.step({
  "line": 121,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "User enter the username \"\u003cUserName\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "User enter the password \"\u003cPassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "User select the check in date as \"06/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "User select the check out date as \"07/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "User enter the firstname",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "User enter the lastname",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "User enter the billingaddress",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "User enter the credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "User select the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "User select the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "User select the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "User enter the cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "User click on the book now button",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "User click on the logout button",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "To verify whether the hotel is booked and to verify the logout",
  "keyword": "Then "
});
formatter.examples({
  "line": 145,
  "name": "",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-with-gst-calculation;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 146,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-with-gst-calculation;;1"
    },
    {
      "cells": [
        "rathipriya",
        "rathi143"
      ],
      "line": 147,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-with-gst-calculation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 147,
  "name": "Launch hotel reservation application and checking with GST calculation",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-with-gst-calculation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 119,
      "name": "@tc_9"
    },
    {
      "line": 1,
      "name": "@demo"
    }
  ]
});
formatter.step({
  "line": 121,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "User enter the username \"rathipriya\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "User enter the password \"rathi143\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "User select the check in date as \"06/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "User select the check out date as \"07/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "User enter the firstname",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "User enter the lastname",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "User enter the billingaddress",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "User enter the credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "User select the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "User select the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "User select the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "User enter the cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "User click on the book now button",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "User click on the logout button",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "To verify whether the hotel is booked and to verify the logout",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 585933900,
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
  "duration": 235999100,
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
  "duration": 252492400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 504176600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 202499500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 191583100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 187475300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 196740000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06/07/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 252094900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/07/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 235535000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 576417300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 143870800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 492236500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_firstname()"
});
formatter.result({
  "duration": 275482900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_lastname()"
});
formatter.result({
  "duration": 231841400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_billingaddress()"
});
formatter.result({
  "duration": 221575600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_credit_card_number()"
});
formatter.result({
  "duration": 283883700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_credit_card_type()"
});
formatter.result({
  "duration": 184389500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_month()"
});
formatter.result({
  "duration": 203027800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_year()"
});
formatter.result({
  "duration": 224052800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_cvv_number()"
});
formatter.result({
  "duration": 211140900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_book_now_button()"
});
formatter.result({
  "duration": 129593900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_logout_button()"
});
formatter.result({
  "duration": 6651439800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.to_verify_whether_the_hotel_is_booked_and_to_verify_the_logout()"
});
formatter.result({
  "duration": 49671500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 150,
  "name": "Launch hotel reservation application and checking with GST calculation",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-with-gst-calculation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 149,
      "name": "@tc_10"
    }
  ]
});
formatter.step({
  "line": 151,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 152,
  "name": "User enter the username \"\u003cUserName\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "User enter the password \"\u003cPassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "User select the check in date as \"06/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "User select the check out date as \"07/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "To verify the total-price as (price-pernight*no-ofrooms*no-ofdays+10% GST) in book a hotel page",
  "keyword": "Then "
});
formatter.examples({
  "line": 165,
  "name": "",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-with-gst-calculation;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 166,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-with-gst-calculation;;1"
    },
    {
      "cells": [
        "rathipriya",
        "rathi143"
      ],
      "line": 167,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-with-gst-calculation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 167,
  "name": "Launch hotel reservation application and checking with GST calculation",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-with-gst-calculation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@demo"
    },
    {
      "line": 149,
      "name": "@tc_10"
    }
  ]
});
formatter.step({
  "line": 151,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 152,
  "name": "User enter the username \"rathipriya\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "User enter the password \"rathi143\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "User select the check in date as \"06/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "User select the check out date as \"07/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "To verify the total-price as (price-pernight*no-ofrooms*no-ofdays+10% GST) in book a hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 254030400,
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
  "duration": 216667900,
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
  "duration": 205504400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 501784500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 175094700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 178601200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 175421700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 249426100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06/07/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 237979300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/07/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 226574900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 603756400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 137182700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 505335600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 66
    }
  ],
  "location": "AdactinStepDefinition.to_verify_the_total_price_as_price_pernight_no_ofrooms_no_ofdays_GST_in_book_a_hotel_page(int)"
});
formatter.result({
  "duration": 97730800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 171,
  "name": "Launch hotel reservation application and checking calculation as well the data\u0027s",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-calculation-as-well-the-data\u0027s",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 170,
      "name": "@tc_11"
    }
  ]
});
formatter.step({
  "line": 172,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 173,
  "name": "User enter the username \"\u003cUserName\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 174,
  "name": "User enter the password \"\u003cPassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "User select the check in date as \"08/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "User select the check out date as \"09/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "Verify that totalprice(excl.GST) is being calculated as (price-per-night*noof-rooms*no-of-days) and checking the provided data\u0027s",
  "keyword": "Then "
});
formatter.examples({
  "line": 186,
  "name": "",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-calculation-as-well-the-data\u0027s;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 187,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-calculation-as-well-the-data\u0027s;;1"
    },
    {
      "cells": [
        "rathipriya",
        "rathi143"
      ],
      "line": 188,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-calculation-as-well-the-data\u0027s;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 188,
  "name": "Launch hotel reservation application and checking calculation as well the data\u0027s",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-calculation-as-well-the-data\u0027s;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@demo"
    },
    {
      "line": 170,
      "name": "@tc_11"
    }
  ]
});
formatter.step({
  "line": 172,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 173,
  "name": "User enter the username \"rathipriya\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 174,
  "name": "User enter the password \"rathi143\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "User select the check in date as \"08/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "User select the check out date as \"09/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "Verify that totalprice(excl.GST) is being calculated as (price-per-night*noof-rooms*no-of-days) and checking the provided data\u0027s",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 179224300,
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
  "duration": 215998200,
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
  "duration": 203158900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 556187000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 162729000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 187005000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 183239700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 185489300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08/07/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 246763100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09/07/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 222628000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 645878700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 130175900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 1275588000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_that_totalprice_excl_GST_is_being_calculated_as_price_per_night_noof_rooms_no_of_days_and_checking_the_provided_data_s()"
});
formatter.result({
  "duration": 224609500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 192,
  "name": "Launch hotel reservation application and checking calculation as well the data\u0027s",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-calculation-as-well-the-data\u0027s",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 191,
      "name": "@tc_12"
    }
  ]
});
formatter.step({
  "line": 193,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 194,
  "name": "User enter the username \"\u003cUserName\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 195,
  "name": "User enter the password \"\u003cPassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 199,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "User select the check in date as \"08/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "User select the check out date as \"09/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 206,
  "name": "To verify the final billed price as (price-pernight*no-ofrooms*no-ofdays+10% GST) in book a hotel page",
  "keyword": "Then "
});
formatter.examples({
  "line": 207,
  "name": "",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-calculation-as-well-the-data\u0027s;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 208,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-calculation-as-well-the-data\u0027s;;1"
    },
    {
      "cells": [
        "rathipriya",
        "rathi143"
      ],
      "line": 209,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-calculation-as-well-the-data\u0027s;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 209,
  "name": "Launch hotel reservation application and checking calculation as well the data\u0027s",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-calculation-as-well-the-data\u0027s;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 191,
      "name": "@tc_12"
    },
    {
      "line": 1,
      "name": "@demo"
    }
  ]
});
formatter.step({
  "line": 193,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 194,
  "name": "User enter the username \"rathipriya\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 195,
  "name": "User enter the password \"rathi143\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 199,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "User select the check in date as \"08/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "User select the check out date as \"09/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 206,
  "name": "To verify the final billed price as (price-pernight*no-ofrooms*no-ofdays+10% GST) in book a hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 456512300,
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
  "duration": 224979000,
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
  "duration": 194861300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 449099100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 186121200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 190171300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 184285700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 186456600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08/07/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 239533300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09/07/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 219184800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 537169300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 135885400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 405033500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 73
    }
  ],
  "location": "AdactinStepDefinition.to_verify_the_final_billed_price_as_price_pernight_no_ofrooms_no_ofdays_GST_in_book_a_hotel_page(int)"
});
formatter.result({
  "duration": 80294500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 213,
  "name": "Launch hotel reservation application and checking calculation as well the data\u0027s",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-calculation-as-well-the-data\u0027s",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 212,
      "name": "@tc_13"
    }
  ]
});
formatter.step({
  "line": 214,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 215,
  "name": "User enter the username \"\u003cUserName\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 216,
  "name": "User enter the password \"\u003cPassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 220,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 221,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "User select the check in date as \"08/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "User select the check out date as \"09/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 224,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 226,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 227,
  "name": "To verify the total-price as (price-pernight*no-ofrooms*no-ofdays) in book a hotel page",
  "keyword": "Then "
});
formatter.examples({
  "line": 228,
  "name": "",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-calculation-as-well-the-data\u0027s;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 229,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-calculation-as-well-the-data\u0027s;;1"
    },
    {
      "cells": [
        "rathipriya",
        "rathi143"
      ],
      "line": 230,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-calculation-as-well-the-data\u0027s;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 230,
  "name": "Launch hotel reservation application and checking calculation as well the data\u0027s",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-calculation-as-well-the-data\u0027s;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 212,
      "name": "@tc_13"
    },
    {
      "line": 1,
      "name": "@demo"
    }
  ]
});
formatter.step({
  "line": 214,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 215,
  "name": "User enter the username \"rathipriya\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 216,
  "name": "User enter the password \"rathi143\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 220,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 221,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "User select the check in date as \"08/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "User select the check out date as \"09/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 224,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 226,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 227,
  "name": "To verify the total-price as (price-pernight*no-ofrooms*no-ofdays) in book a hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 189598900,
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
  "duration": 271762600,
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
  "duration": 248058600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 490343100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 174237500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 165197000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 189370100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 179436800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08/07/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 247400200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09/07/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 232204400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 602564200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 135436500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 403781300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.to_verify_the_total_price_as_price_pernight_no_ofrooms_no_ofdays_in_book_a_hotel_page()"
});
formatter.result({
  "duration": 156242400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 234,
  "name": "Launch hotel reservation application and checking whether order number generated or not",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-whether-order-number-generated-or-not",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 233,
      "name": "@tc_14"
    }
  ]
});
formatter.step({
  "line": 235,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 236,
  "name": "User enter the username \"\u003cUserName\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 237,
  "name": "User enter the password \"\u003cPassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "User select the check in date as \"06/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "User select the check out date as \"07/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "User enter the firstname",
  "keyword": "And "
});
formatter.step({
  "line": 249,
  "name": "User enter the lastname",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "User enter the billingaddress",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "User enter the credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "User select the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "User select the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "User select the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "User enter the cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "User click on the book now button",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "To verify whether the hotel order number is generated or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 258,
  "name": "",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-whether-order-number-generated-or-not;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 259,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-whether-order-number-generated-or-not;;1"
    },
    {
      "cells": [
        "rathipriya",
        "rathi143"
      ],
      "line": 260,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-whether-order-number-generated-or-not;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 260,
  "name": "Launch hotel reservation application and checking whether order number generated or not",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-whether-order-number-generated-or-not;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 233,
      "name": "@tc_14"
    },
    {
      "line": 1,
      "name": "@demo"
    }
  ]
});
formatter.step({
  "line": 235,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 236,
  "name": "User enter the username \"rathipriya\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 237,
  "name": "User enter the password \"rathi143\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "User select the check in date as \"06/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "User select the check out date as \"07/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "User enter the firstname",
  "keyword": "And "
});
formatter.step({
  "line": 249,
  "name": "User enter the lastname",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "User enter the billingaddress",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "User enter the credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "User select the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "User select the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "User select the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "User enter the cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "User click on the book now button",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "To verify whether the hotel order number is generated or not",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 232451700,
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
  "duration": 245548700,
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
  "duration": 191698300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 455492800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 156272900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 177035400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 190823000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 180662200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06/07/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 234920400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/07/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 215082400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 628955100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 120131900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 405332800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_firstname()"
});
formatter.result({
  "duration": 223871500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_lastname()"
});
formatter.result({
  "duration": 193571100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_billingaddress()"
});
formatter.result({
  "duration": 218595800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_credit_card_number()"
});
formatter.result({
  "duration": 278082100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_credit_card_type()"
});
formatter.result({
  "duration": 189527900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_month()"
});
formatter.result({
  "duration": 184001400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_year()"
});
formatter.result({
  "duration": 194297100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_cvv_number()"
});
formatter.result({
  "duration": 219500100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_book_now_button()"
});
formatter.result({
  "duration": 160397500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.to_verify_whether_the_hotel_order_number_is_generated_or_not()"
});
formatter.result({
  "duration": 5360862300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 264,
  "name": "Launch hotel reservation application and checking whether data\u0027s can be editable or not",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-whether-data\u0027s-can-be-editable-or-not",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 263,
      "name": "@tc_15"
    }
  ]
});
formatter.step({
  "line": 265,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 266,
  "name": "User enter the username \"\u003cUserName\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 267,
  "name": "User enter the password \"\u003cPassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 270,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 272,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "User select the check in date as \"06/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "User select the check out date as \"07/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 275,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 278,
  "name": "User enter the firstname",
  "keyword": "And "
});
formatter.step({
  "line": 279,
  "name": "User enter the lastname",
  "keyword": "And "
});
formatter.step({
  "line": 280,
  "name": "User enter the billingaddress",
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "User enter the credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 282,
  "name": "User select the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "User select the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "User select the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "User enter the cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "User click on the book now button",
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "User click on the my itinerary button",
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "To verify whether the data\u0027s can be editable or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 289,
  "name": "",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-whether-data\u0027s-can-be-editable-or-not;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 290,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-whether-data\u0027s-can-be-editable-or-not;;1"
    },
    {
      "cells": [
        "rathipriya",
        "rathi143"
      ],
      "line": 291,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-whether-data\u0027s-can-be-editable-or-not;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 291,
  "name": "Launch hotel reservation application and checking whether data\u0027s can be editable or not",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-whether-data\u0027s-can-be-editable-or-not;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 263,
      "name": "@tc_15"
    },
    {
      "line": 1,
      "name": "@demo"
    }
  ]
});
formatter.step({
  "line": 265,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 266,
  "name": "User enter the username \"rathipriya\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 267,
  "name": "User enter the password \"rathi143\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 270,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 272,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "User select the check in date as \"06/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "User select the check out date as \"07/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 275,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 278,
  "name": "User enter the firstname",
  "keyword": "And "
});
formatter.step({
  "line": 279,
  "name": "User enter the lastname",
  "keyword": "And "
});
formatter.step({
  "line": 280,
  "name": "User enter the billingaddress",
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "User enter the credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 282,
  "name": "User select the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "User select the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "User select the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "User enter the cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "User click on the book now button",
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "User click on the my itinerary button",
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "To verify whether the data\u0027s can be editable or not",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 211756100,
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
  "duration": 219278100,
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
  "duration": 212620000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 572527900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 185228600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 188484600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 185943600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 172368200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06/07/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 245025300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/07/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 231203600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 545264700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 124291300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 379628500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_firstname()"
});
formatter.result({
  "duration": 207544100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_lastname()"
});
formatter.result({
  "duration": 200118900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_billingaddress()"
});
formatter.result({
  "duration": 209173600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_credit_card_number()"
});
formatter.result({
  "duration": 276219800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_credit_card_type()"
});
formatter.result({
  "duration": 186626300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_month()"
});
formatter.result({
  "duration": 187037300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_year()"
});
formatter.result({
  "duration": 184333500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_cvv_number()"
});
formatter.result({
  "duration": 215849100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_book_now_button()"
});
formatter.result({
  "duration": 119299200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_my_itinerary_button()"
});
formatter.result({
  "duration": 6135776200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.to_verify_whether_the_data_s_can_be_editable_or_not()"
});
formatter.result({
  "duration": 2599366800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 296,
  "name": "Launch hotel reservation application and checking the data\u0027s in my itinerary",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-the-data\u0027s-in-my-itinerary",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 295,
      "name": "@tc_16"
    }
  ]
});
formatter.step({
  "line": 297,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 298,
  "name": "User enter the username \"\u003cUserName\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 299,
  "name": "User enter the password \"\u003cPassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 300,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 302,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 303,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 304,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 305,
  "name": "User select the check in date as \"06/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 306,
  "name": "User select the check out date as \"07/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 307,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 308,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "User enter the firstname",
  "keyword": "And "
});
formatter.step({
  "line": 311,
  "name": "User enter the lastname",
  "keyword": "And "
});
formatter.step({
  "line": 312,
  "name": "User enter the billingaddress",
  "keyword": "And "
});
formatter.step({
  "line": 313,
  "name": "User enter the credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 314,
  "name": "User select the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "User select the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 316,
  "name": "User select the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 317,
  "name": "User enter the cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 318,
  "name": "User click on the book now button",
  "keyword": "And "
});
formatter.step({
  "line": 319,
  "name": "User click on the my itinerary button",
  "keyword": "And "
});
formatter.step({
  "line": 320,
  "name": "To verify whether the data\u0027s in my itinerary page",
  "keyword": "Then "
});
formatter.examples({
  "line": 321,
  "name": "",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-the-data\u0027s-in-my-itinerary;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 322,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-the-data\u0027s-in-my-itinerary;;1"
    },
    {
      "cells": [
        "rathipriya",
        "rathi143"
      ],
      "line": 323,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-the-data\u0027s-in-my-itinerary;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 323,
  "name": "Launch hotel reservation application and checking the data\u0027s in my itinerary",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-the-data\u0027s-in-my-itinerary;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 295,
      "name": "@tc_16"
    },
    {
      "line": 1,
      "name": "@demo"
    }
  ]
});
formatter.step({
  "line": 297,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 298,
  "name": "User enter the username \"rathipriya\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 299,
  "name": "User enter the password \"rathi143\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 300,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 302,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 303,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 304,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 305,
  "name": "User select the check in date as \"06/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 306,
  "name": "User select the check out date as \"07/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 307,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 308,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "User enter the firstname",
  "keyword": "And "
});
formatter.step({
  "line": 311,
  "name": "User enter the lastname",
  "keyword": "And "
});
formatter.step({
  "line": 312,
  "name": "User enter the billingaddress",
  "keyword": "And "
});
formatter.step({
  "line": 313,
  "name": "User enter the credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 314,
  "name": "User select the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "User select the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 316,
  "name": "User select the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 317,
  "name": "User enter the cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 318,
  "name": "User click on the book now button",
  "keyword": "And "
});
formatter.step({
  "line": 319,
  "name": "User click on the my itinerary button",
  "keyword": "And "
});
formatter.step({
  "line": 320,
  "name": "To verify whether the data\u0027s in my itinerary page",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 187974600,
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
  "duration": 220814200,
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
  "duration": 216472900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 444799100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 170350200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 188033600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 185492500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 187378300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06/07/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 246430200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/07/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 222724400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 559053700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 149836700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 387366400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_firstname()"
});
formatter.result({
  "duration": 221683900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_lastname()"
});
formatter.result({
  "duration": 201474700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_billingaddress()"
});
formatter.result({
  "duration": 211502500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_credit_card_number()"
});
formatter.result({
  "duration": 284487700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_credit_card_type()"
});
formatter.result({
  "duration": 184812200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_month()"
});
formatter.result({
  "duration": 189754100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_year()"
});
formatter.result({
  "duration": 191020700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_cvv_number()"
});
formatter.result({
  "duration": 209142700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_book_now_button()"
});
formatter.result({
  "duration": 120279900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_my_itinerary_button()"
});
formatter.result({
  "duration": 6225356700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.to_verify_whether_the_data_s_in_my_itinerary_page()"
});
formatter.result({
  "duration": 388086900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 328,
  "name": "Launch hotel reservation application and searchin order id and validating",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-searchin-order-id-and-validating",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 327,
      "name": "@tc_17"
    }
  ]
});
formatter.step({
  "line": 329,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 330,
  "name": "User enter the username \"\u003cUserName\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 331,
  "name": "User enter the password \"\u003cPassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 332,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 333,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 334,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 335,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 336,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "User select the check in date as \"06/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 338,
  "name": "User select the check out date as \"07/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 339,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 340,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 341,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 342,
  "name": "User enter the firstname",
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "User enter the lastname",
  "keyword": "And "
});
formatter.step({
  "line": 344,
  "name": "User enter the billingaddress",
  "keyword": "And "
});
formatter.step({
  "line": 345,
  "name": "User enter the credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 346,
  "name": "User select the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 347,
  "name": "User select the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 348,
  "name": "User select the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 349,
  "name": "User enter the cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 350,
  "name": "User click on the book now button",
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "User click on the my itinerary button",
  "keyword": "And "
});
formatter.step({
  "line": 352,
  "name": "User type the order id in the search order field",
  "keyword": "And "
});
formatter.step({
  "line": 353,
  "name": "User click on go button",
  "keyword": "And "
});
formatter.step({
  "line": 354,
  "name": "To verify whether the data\u0027s are correct as per the order id entered",
  "keyword": "Then "
});
formatter.examples({
  "line": 355,
  "name": "",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-searchin-order-id-and-validating;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 356,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-searchin-order-id-and-validating;;1"
    },
    {
      "cells": [
        "rathipriya",
        "rathi143"
      ],
      "line": 357,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-searchin-order-id-and-validating;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 357,
  "name": "Launch hotel reservation application and searchin order id and validating",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-searchin-order-id-and-validating;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 327,
      "name": "@tc_17"
    },
    {
      "line": 1,
      "name": "@demo"
    }
  ]
});
formatter.step({
  "line": 329,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 330,
  "name": "User enter the username \"rathipriya\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 331,
  "name": "User enter the password \"rathi143\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 332,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 333,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 334,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 335,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 336,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "User select the check in date as \"06/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 338,
  "name": "User select the check out date as \"07/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 339,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 340,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 341,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 342,
  "name": "User enter the firstname",
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "User enter the lastname",
  "keyword": "And "
});
formatter.step({
  "line": 344,
  "name": "User enter the billingaddress",
  "keyword": "And "
});
formatter.step({
  "line": 345,
  "name": "User enter the credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 346,
  "name": "User select the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 347,
  "name": "User select the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 348,
  "name": "User select the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 349,
  "name": "User enter the cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 350,
  "name": "User click on the book now button",
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "User click on the my itinerary button",
  "keyword": "And "
});
formatter.step({
  "line": 352,
  "name": "User type the order id in the search order field",
  "keyword": "And "
});
formatter.step({
  "line": 353,
  "name": "User click on go button",
  "keyword": "And "
});
formatter.step({
  "line": 354,
  "name": "To verify whether the data\u0027s are correct as per the order id entered",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 631645900,
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
  "duration": 226968100,
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
  "duration": 202106900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 398910900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 168615900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 182124200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 188658600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 183022700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06/07/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 243189700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/07/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 219921800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 622030000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 120535400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 484173500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_firstname()"
});
formatter.result({
  "duration": 216323000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_lastname()"
});
formatter.result({
  "duration": 196358500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_billingaddress()"
});
formatter.result({
  "duration": 210320500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_credit_card_number()"
});
formatter.result({
  "duration": 261325300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_credit_card_type()"
});
formatter.result({
  "duration": 170526900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_month()"
});
formatter.result({
  "duration": 186170300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_year()"
});
formatter.result({
  "duration": 173675400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_cvv_number()"
});
formatter.result({
  "duration": 211404500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_book_now_button()"
});
formatter.result({
  "duration": 117656400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_my_itinerary_button()"
});
formatter.result({
  "duration": 6701597100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_type_the_order_id_in_the_search_order_field()"
});
formatter.result({
  "duration": 678732200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_go_button()"
});
formatter.result({
  "duration": 2020497700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.to_verify_whether_the_data_s_are_correct_as_per_the_order_id_entered()"
});
formatter.result({
  "duration": 39950600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 362,
  "name": "Launch hotel reservation application and searchin order id validating the details in booked itinerary",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-searchin-order-id-validating-the-details-in-booked-itinerary",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 361,
      "name": "@tc_18"
    }
  ]
});
formatter.step({
  "line": 363,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 364,
  "name": "User enter the username \"\u003cUserName\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 365,
  "name": "User enter the password \"\u003cPassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 366,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 367,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 368,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 369,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 370,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 371,
  "name": "User select the check in date as \"06/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 372,
  "name": "User select the check out date as \"07/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 373,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 374,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 375,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 376,
  "name": "User enter the firstname",
  "keyword": "And "
});
formatter.step({
  "line": 377,
  "name": "User enter the lastname",
  "keyword": "And "
});
formatter.step({
  "line": 378,
  "name": "User enter the billingaddress",
  "keyword": "And "
});
formatter.step({
  "line": 379,
  "name": "User enter the credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 380,
  "name": "User select the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 381,
  "name": "User select the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 382,
  "name": "User select the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 383,
  "name": "User enter the cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 384,
  "name": "User click on the book now button",
  "keyword": "And "
});
formatter.step({
  "line": 385,
  "name": "User click on the my itinerary button",
  "keyword": "And "
});
formatter.step({
  "line": 386,
  "name": "User type the order id in the search order field",
  "keyword": "And "
});
formatter.step({
  "line": 387,
  "name": "User click on go button",
  "keyword": "And "
});
formatter.step({
  "line": 388,
  "name": "To verify whether the data\u0027s are correct in the booked itinerary",
  "keyword": "Then "
});
formatter.examples({
  "line": 389,
  "name": "",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-searchin-order-id-validating-the-details-in-booked-itinerary;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 390,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-searchin-order-id-validating-the-details-in-booked-itinerary;;1"
    },
    {
      "cells": [
        "rathipriya",
        "rathi143"
      ],
      "line": 391,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-searchin-order-id-validating-the-details-in-booked-itinerary;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 391,
  "name": "Launch hotel reservation application and searchin order id validating the details in booked itinerary",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-searchin-order-id-validating-the-details-in-booked-itinerary;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 361,
      "name": "@tc_18"
    },
    {
      "line": 1,
      "name": "@demo"
    }
  ]
});
formatter.step({
  "line": 363,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 364,
  "name": "User enter the username \"rathipriya\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 365,
  "name": "User enter the password \"rathi143\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 366,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 367,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 368,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 369,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 370,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 371,
  "name": "User select the check in date as \"06/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 372,
  "name": "User select the check out date as \"07/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 373,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 374,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 375,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 376,
  "name": "User enter the firstname",
  "keyword": "And "
});
formatter.step({
  "line": 377,
  "name": "User enter the lastname",
  "keyword": "And "
});
formatter.step({
  "line": 378,
  "name": "User enter the billingaddress",
  "keyword": "And "
});
formatter.step({
  "line": 379,
  "name": "User enter the credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 380,
  "name": "User select the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 381,
  "name": "User select the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 382,
  "name": "User select the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 383,
  "name": "User enter the cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 384,
  "name": "User click on the book now button",
  "keyword": "And "
});
formatter.step({
  "line": 385,
  "name": "User click on the my itinerary button",
  "keyword": "And "
});
formatter.step({
  "line": 386,
  "name": "User type the order id in the search order field",
  "keyword": "And "
});
formatter.step({
  "line": 387,
  "name": "User click on go button",
  "keyword": "And "
});
formatter.step({
  "line": 388,
  "name": "To verify whether the data\u0027s are correct in the booked itinerary",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 643469300,
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
  "duration": 241396100,
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
  "duration": 194987500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 519812800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 164423200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 186408600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 190380700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 182547300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06/07/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 241909300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/07/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 220662100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 528737800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 123802900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 413582100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_firstname()"
});
formatter.result({
  "duration": 210756900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_lastname()"
});
formatter.result({
  "duration": 191549100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_billingaddress()"
});
formatter.result({
  "duration": 221632400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_credit_card_number()"
});
formatter.result({
  "duration": 268922700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_credit_card_type()"
});
formatter.result({
  "duration": 164229100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_month()"
});
formatter.result({
  "duration": 180982900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_year()"
});
formatter.result({
  "duration": 185393900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_cvv_number()"
});
formatter.result({
  "duration": 212437100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_book_now_button()"
});
formatter.result({
  "duration": 121796500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_my_itinerary_button()"
});
formatter.result({
  "duration": 6216552600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_type_the_order_id_in_the_search_order_field()"
});
formatter.result({
  "duration": 585282600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_go_button()"
});
formatter.result({
  "duration": 1815887100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.to_verify_whether_the_data_s_are_correct_in_the_booked_itinerary()"
});
formatter.result({
  "duration": 294428300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 397,
  "name": "Launch hotel reservation application and cancelling the order and validating",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-cancelling-the-order-and-validating",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 396,
      "name": "@tc_19"
    }
  ]
});
formatter.step({
  "line": 398,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 399,
  "name": "User enter the username \"\u003cUserName\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 400,
  "name": "User enter the password \"\u003cPassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 401,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 402,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 403,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 404,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 405,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 406,
  "name": "User select the check in date as \"06/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 407,
  "name": "User select the check out date as \"07/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 408,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 409,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 410,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 411,
  "name": "User enter the firstname",
  "keyword": "And "
});
formatter.step({
  "line": 412,
  "name": "User enter the lastname",
  "keyword": "And "
});
formatter.step({
  "line": 413,
  "name": "User enter the billingaddress",
  "keyword": "And "
});
formatter.step({
  "line": 414,
  "name": "User enter the credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 415,
  "name": "User select the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 416,
  "name": "User select the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 417,
  "name": "User select the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 418,
  "name": "User enter the cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 419,
  "name": "User click on the book now button",
  "keyword": "And "
});
formatter.step({
  "line": 420,
  "name": "User click on the my itinerary button",
  "keyword": "And "
});
formatter.step({
  "line": 421,
  "name": "User type the order id in the search order field \"043CB0694A\"",
  "keyword": "And "
});
formatter.step({
  "line": 422,
  "name": "User click on go button",
  "keyword": "And "
});
formatter.step({
  "line": 423,
  "name": "To verify whether the order is cancelled or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 424,
  "name": "",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-cancelling-the-order-and-validating;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 425,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-cancelling-the-order-and-validating;;1"
    },
    {
      "cells": [
        "rathipriya",
        "rathi143"
      ],
      "line": 426,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-cancelling-the-order-and-validating;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 426,
  "name": "Launch hotel reservation application and cancelling the order and validating",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-cancelling-the-order-and-validating;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@demo"
    },
    {
      "line": 396,
      "name": "@tc_19"
    }
  ]
});
formatter.step({
  "line": 398,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 399,
  "name": "User enter the username \"rathipriya\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 400,
  "name": "User enter the password \"rathi143\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 401,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 402,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 403,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 404,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 405,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 406,
  "name": "User select the check in date as \"06/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 407,
  "name": "User select the check out date as \"07/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 408,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 409,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 410,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 411,
  "name": "User enter the firstname",
  "keyword": "And "
});
formatter.step({
  "line": 412,
  "name": "User enter the lastname",
  "keyword": "And "
});
formatter.step({
  "line": 413,
  "name": "User enter the billingaddress",
  "keyword": "And "
});
formatter.step({
  "line": 414,
  "name": "User enter the credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 415,
  "name": "User select the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 416,
  "name": "User select the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 417,
  "name": "User select the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 418,
  "name": "User enter the cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 419,
  "name": "User click on the book now button",
  "keyword": "And "
});
formatter.step({
  "line": 420,
  "name": "User click on the my itinerary button",
  "keyword": "And "
});
formatter.step({
  "line": 421,
  "name": "User type the order id in the search order field \"043CB0694A\"",
  "keyword": "And "
});
formatter.step({
  "line": 422,
  "name": "User click on go button",
  "keyword": "And "
});
formatter.step({
  "line": 423,
  "name": "To verify whether the order is cancelled or not",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 230268200,
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
  "duration": 212420100,
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
  "duration": 210518100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 500971900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 186725000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 185195200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 182788600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 180711300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06/07/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 232622200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/07/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 230309100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 734142400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 159125700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 488695600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_firstname()"
});
formatter.result({
  "duration": 230431700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_lastname()"
});
formatter.result({
  "duration": 189183600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_billingaddress()"
});
formatter.result({
  "duration": 226695500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_credit_card_number()"
});
formatter.result({
  "duration": 256954400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_credit_card_type()"
});
formatter.result({
  "duration": 170924600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_month()"
});
formatter.result({
  "duration": 188056500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_year()"
});
formatter.result({
  "duration": 185343900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_cvv_number()"
});
formatter.result({
  "duration": 200061300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_book_now_button()"
});
formatter.result({
  "duration": 126198100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_my_itinerary_button()"
});
formatter.result({
  "duration": 6433485400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "043CB0694A",
      "offset": 50
    }
  ],
  "location": "AdactinStepDefinition.user_type_the_order_id_in_the_search_order_field(String)"
});
formatter.result({
  "duration": 556185800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_go_button()"
});
formatter.result({
  "duration": 1711721900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.to_verify_whether_the_order_is_cancelled_or_not()"
});
formatter.result({
  "duration": 100365407900,
  "error_message": "java.lang.RuntimeException\r\n\tat com.selenium.baseclass.BaseClass.clickOnTheElement(BaseClass.java:129)\r\n\tat com.cucumber.adactinstepdefinition.AdactinStepDefinition.to_verify_whether_the_order_is_cancelled_or_not(AdactinStepDefinition.java:501)\r\n\tat ✽.Then To verify whether the order is cancelled or not(AdactinPracticeEnd2End.feature:423)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 431,
  "name": "Launch hotel reservation application and verifying the loading pages in the application",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-verifying-the-loading-pages-in-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 430,
      "name": "@tc_20"
    }
  ]
});
formatter.step({
  "line": 432,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 433,
  "name": "User enter the username \"\u003cUserName\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 434,
  "name": "User enter the password \"\u003cPassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 435,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 436,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 437,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 438,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 439,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 440,
  "name": "User select the check in date as \"06/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 441,
  "name": "User select the check out date as \"07/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 442,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 443,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 444,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 445,
  "name": "User enter the firstname",
  "keyword": "And "
});
formatter.step({
  "line": 446,
  "name": "User enter the lastname",
  "keyword": "And "
});
formatter.step({
  "line": 447,
  "name": "User enter the billingaddress",
  "keyword": "And "
});
formatter.step({
  "line": 448,
  "name": "User enter the credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 449,
  "name": "User select the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 450,
  "name": "User select the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 451,
  "name": "User select the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 452,
  "name": "User enter the cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 453,
  "name": "User click on the book now button",
  "keyword": "And "
});
formatter.step({
  "line": 454,
  "name": "User click on the my itinerary button",
  "keyword": "And "
});
formatter.step({
  "line": 455,
  "name": "User type the order id in the search order field \"80YC32XXR5\"",
  "keyword": "And "
});
formatter.step({
  "line": 456,
  "name": "User click on go button",
  "keyword": "And "
});
formatter.step({
  "line": 457,
  "name": "User click on logout button in booked itinerary page",
  "keyword": "And "
});
formatter.step({
  "line": 458,
  "name": "To verify all the pages loading in the adactin application",
  "keyword": "Then "
});
formatter.examples({
  "line": 459,
  "name": "",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-verifying-the-loading-pages-in-the-application;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 460,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-verifying-the-loading-pages-in-the-application;;1"
    },
    {
      "cells": [
        "rathipriya",
        "rathi143"
      ],
      "line": 461,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-verifying-the-loading-pages-in-the-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 461,
  "name": "Launch hotel reservation application and verifying the loading pages in the application",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-verifying-the-loading-pages-in-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@demo"
    },
    {
      "line": 430,
      "name": "@tc_20"
    }
  ]
});
formatter.step({
  "line": 432,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 433,
  "name": "User enter the username \"rathipriya\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 434,
  "name": "User enter the password \"rathi143\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 435,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 436,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 437,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 438,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 439,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 440,
  "name": "User select the check in date as \"06/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 441,
  "name": "User select the check out date as \"07/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 442,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 443,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 444,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 445,
  "name": "User enter the firstname",
  "keyword": "And "
});
formatter.step({
  "line": 446,
  "name": "User enter the lastname",
  "keyword": "And "
});
formatter.step({
  "line": 447,
  "name": "User enter the billingaddress",
  "keyword": "And "
});
formatter.step({
  "line": 448,
  "name": "User enter the credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 449,
  "name": "User select the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 450,
  "name": "User select the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 451,
  "name": "User select the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 452,
  "name": "User enter the cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 453,
  "name": "User click on the book now button",
  "keyword": "And "
});
formatter.step({
  "line": 454,
  "name": "User click on the my itinerary button",
  "keyword": "And "
});
formatter.step({
  "line": 455,
  "name": "User type the order id in the search order field \"80YC32XXR5\"",
  "keyword": "And "
});
formatter.step({
  "line": 456,
  "name": "User click on go button",
  "keyword": "And "
});
formatter.step({
  "line": 457,
  "name": "User click on logout button in booked itinerary page",
  "keyword": "And "
});
formatter.step({
  "line": 458,
  "name": "To verify all the pages loading in the adactin application",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 867775700,
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
  "duration": 247550600,
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
  "duration": 215675100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 628132100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 166465400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 177116800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 183300900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 191720300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06/07/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 233574800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/07/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 205297600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 707427000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 142372900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 497335100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_firstname()"
});
formatter.result({
  "duration": 234361400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_lastname()"
});
formatter.result({
  "duration": 207878700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_billingaddress()"
});
formatter.result({
  "duration": 230781800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_credit_card_number()"
});
formatter.result({
  "duration": 281627500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_credit_card_type()"
});
formatter.result({
  "duration": 194961300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_month()"
});
formatter.result({
  "duration": 198653900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_year()"
});
formatter.result({
  "duration": 191936100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_cvv_number()"
});
formatter.result({
  "duration": 211578400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_book_now_button()"
});
formatter.result({
  "duration": 125588000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_my_itinerary_button()"
});
formatter.result({
  "duration": 6906564300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80YC32XXR5",
      "offset": 50
    }
  ],
  "location": "AdactinStepDefinition.user_type_the_order_id_in_the_search_order_field(String)"
});
formatter.result({
  "duration": 596190200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_go_button()"
});
formatter.result({
  "duration": 1839216100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_logout_button_in_booked_itinerary_page()"
});
formatter.result({
  "duration": 356098900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.to_verify_all_the_pages_loading_in_the_adactin_application()"
});
formatter.result({
  "duration": 50049550000,
  "error_message": "java.lang.RuntimeException\r\n\tat com.selenium.baseclass.BaseClass.getTextOfTheElement(BaseClass.java:268)\r\n\tat com.cucumber.adactinstepdefinition.AdactinStepDefinition.to_verify_all_the_pages_loading_in_the_adactin_application(AdactinStepDefinition.java:520)\r\n\tat ✽.Then To verify all the pages loading in the adactin application(AdactinPracticeEnd2End.feature:458)\r\n",
  "status": "failed"
});
});