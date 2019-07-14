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
  "duration": 347401,
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
  "duration": 12200981100,
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
  "duration": 1865169599,
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
  "duration": 241217900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 3017056899,
  "status": "passed"
});
formatter.after({
  "duration": 432700,
  "status": "passed"
});
formatter.before({
  "duration": 168700,
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
  "duration": 610382900,
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
  "duration": 258161700,
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
  "duration": 249231400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 2068012300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 663662399,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 201296801,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 205596499,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 257827001,
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
  "duration": 866603500,
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
  "duration": 245806700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 950710000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_that_system_gives_an_error_saying_check_in_date_should_not_be_later_than_check_out_date()"
});
formatter.result({
  "duration": 4680142600,
  "status": "passed"
});
formatter.after({
  "duration": 126500,
  "status": "passed"
});
formatter.before({
  "duration": 89800,
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
  "duration": 2226602300,
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
  "duration": 240653500,
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
  "duration": 230118200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 876448700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 240620800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 223355900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 186963799,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 203208700,
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
  "duration": 258633401,
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
  "duration": 253031300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 1712128900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_that_the_error_message_saying_enter_the_valid_dates()"
});
formatter.result({
  "duration": 33499,
  "status": "passed"
});
formatter.after({
  "duration": 101800,
  "status": "passed"
});
formatter.before({
  "duration": 91100,
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
  "duration": 421705400,
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
  "duration": 467504500,
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
  "duration": 267648500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 870556500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 193977000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 202925300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 203540600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 199022900,
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
  "duration": 257341300,
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
  "duration": 223621401,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 12228665800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_that_hotel_location_and_hotel_name_displayed_is_the_same_as_selected_in_search_Hotel_form()"
});
formatter.result({
  "duration": 63079599,
  "status": "passed"
});
formatter.after({
  "duration": 147500,
  "status": "passed"
});
formatter.before({
  "duration": 93900,
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
  "duration": 483442900,
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
  "duration": 353728600,
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
  "duration": 337793601,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 924169200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 350724500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 229234801,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 206073700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 203939800,
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
  "duration": 307967400,
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
  "duration": 486533501,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 1866431200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_the_check_in_and_check_out_date_displayed_is_the_same_as_selected_in_search_Hotel_form()"
});
formatter.result({
  "duration": 73868501,
  "status": "passed"
});
formatter.after({
  "duration": 109599,
  "status": "passed"
});
formatter.before({
  "duration": 135200,
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
  "duration": 406411800,
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
  "duration": 435074700,
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
  "duration": 314382499,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 1178871900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 194133699,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 196651600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 185995601,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 192036401,
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
  "duration": 240616299,
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
  "duration": 259584101,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 9635299199,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_the_no_of_rooms_selected_in_search_Hotel_form()"
});
formatter.result({
  "duration": 40129200,
  "status": "passed"
});
formatter.after({
  "duration": 94700,
  "status": "passed"
});
formatter.before({
  "duration": 76199,
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
  "duration": 1258312900,
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
  "duration": 241792999,
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
  "duration": 212160400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 1249135600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 199818200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 200229999,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 196809000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 186116500,
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
  "duration": 285359400,
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
  "duration": 232755401,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 1153445400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_the_rooms_type_selected_in_search_Hotel_form()"
});
formatter.result({
  "duration": 31858699,
  "status": "passed"
});
formatter.after({
  "duration": 92501,
  "status": "passed"
});
formatter.before({
  "duration": 84500,
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
  "duration": 593943701,
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
  "duration": 227286001,
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
  "duration": 204132401,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 1038339199,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 188926201,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 198372400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 183061199,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 186511401,
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
  "duration": 252922400,
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
  "duration": 228454301,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 1526343799,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 222789500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 1243370299,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_that_totalprice_excl_GST_is_being_calculated_as_price_per_night_noof_rooms_no_of_days()"
});
formatter.result({
  "duration": 134468800,
  "status": "passed"
});
formatter.after({
  "duration": 71900,
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
formatter.before({
  "duration": 120000,
  "status": "passed"
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
  "duration": 546409500,
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
  "duration": 220506199,
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
  "duration": 279865600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 1698542100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 193386200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 181966399,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 211313500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 185118700,
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
  "duration": 269419201,
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
  "duration": 251161100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 855866400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 147272000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 745615000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_firstname()"
});
formatter.result({
  "duration": 239170099,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_lastname()"
});
formatter.result({
  "duration": 234765500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_billingaddress()"
});
formatter.result({
  "duration": 214358400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_credit_card_number()"
});
formatter.result({
  "duration": 1709962000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_credit_card_type()"
});
formatter.result({
  "duration": 181636400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_month()"
});
formatter.result({
  "duration": 192419399,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_year()"
});
formatter.result({
  "duration": 191297200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_cvv_number()"
});
formatter.result({
  "duration": 240545700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_book_now_button()"
});
formatter.result({
  "duration": 169782300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_logout_button()"
});
formatter.result({
  "duration": 6984487799,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.to_verify_whether_the_hotel_is_booked_and_to_verify_the_logout()"
});
formatter.result({
  "duration": 92108001,
  "status": "passed"
});
formatter.after({
  "duration": 111500,
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
formatter.before({
  "duration": 102399,
  "status": "passed"
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
  "duration": 1096695800,
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
  "duration": 242243700,
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
  "duration": 209091400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 1279575300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 180840200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 174257099,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 188861600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 185535400,
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
  "duration": 235739301,
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
  "duration": 224027300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 1258346001,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 171797100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 1254110200,
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
  "duration": 102704501,
  "status": "passed"
});
formatter.after({
  "duration": 85001,
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
formatter.before({
  "duration": 86101,
  "status": "passed"
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
  "duration": 577662800,
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
  "duration": 225818500,
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
  "duration": 214875300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 999278100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 184305699,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 184719500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 182793501,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 186146401,
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
  "duration": 253998201,
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
  "duration": 259395000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 1674551901,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 145464900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 812666701,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_that_totalprice_excl_GST_is_being_calculated_as_price_per_night_noof_rooms_no_of_days_and_checking_the_provided_data_s()"
});
formatter.result({
  "duration": 215104999,
  "status": "passed"
});
formatter.after({
  "duration": 147400,
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
formatter.before({
  "duration": 124601,
  "status": "passed"
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
  "duration": 525333100,
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
  "duration": 246900299,
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
  "duration": 284291900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 1298342999,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 222722200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 181852599,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 536411501,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 181881500,
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
  "duration": 243466000,
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
  "duration": 243127500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 894167900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 153171699,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 714648799,
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
  "duration": 170106800,
  "status": "passed"
});
formatter.after({
  "duration": 102200,
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
formatter.before({
  "duration": 112100,
  "status": "passed"
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
  "duration": 427337000,
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
  "duration": 254098200,
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
  "duration": 220831501,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 1583240200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 188485799,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 184531000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 184585500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 192601500,
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
  "duration": 340720400,
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
  "duration": 219612301,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 1330205500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 165528499,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 1041287000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.to_verify_the_total_price_as_price_pernight_no_ofrooms_no_ofdays_in_book_a_hotel_page()"
});
formatter.result({
  "duration": 173224001,
  "status": "passed"
});
formatter.after({
  "duration": 70100,
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
formatter.before({
  "duration": 163701,
  "status": "passed"
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
  "duration": 1017922300,
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
  "duration": 214457300,
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
  "duration": 203489500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 952680300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 177900500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 190449699,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 197048499,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 185504801,
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
  "duration": 233998701,
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
  "duration": 236565899,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 1187378400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 142619200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 1453734199,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_firstname()"
});
formatter.result({
  "duration": 225866000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_lastname()"
});
formatter.result({
  "duration": 215766200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_billingaddress()"
});
formatter.result({
  "duration": 218519400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_credit_card_number()"
});
formatter.result({
  "duration": 285180200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_credit_card_type()"
});
formatter.result({
  "duration": 188321701,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_month()"
});
formatter.result({
  "duration": 200148101,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_year()"
});
formatter.result({
  "duration": 197277599,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_cvv_number()"
});
formatter.result({
  "duration": 201553000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_book_now_button()"
});
formatter.result({
  "duration": 142534801,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.to_verify_whether_the_hotel_order_number_is_generated_or_not()"
});
formatter.result({
  "duration": 6555628600,
  "status": "passed"
});
formatter.after({
  "duration": 95801,
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
formatter.before({
  "duration": 180600,
  "status": "passed"
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
  "duration": 739822601,
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
  "duration": 218987000,
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
  "duration": 213796900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 5033968200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 207163100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 179168000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 216454399,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 172545801,
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
  "duration": 246316901,
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
  "duration": 234287700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 857886499,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 133842699,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 951148799,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_firstname()"
});
formatter.result({
  "duration": 224842700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_lastname()"
});
formatter.result({
  "duration": 210072600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_billingaddress()"
});
formatter.result({
  "duration": 204462199,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_credit_card_number()"
});
formatter.result({
  "duration": 281989501,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_credit_card_type()"
});
formatter.result({
  "duration": 173514301,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_month()"
});
formatter.result({
  "duration": 195378501,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_year()"
});
formatter.result({
  "duration": 192766400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_cvv_number()"
});
formatter.result({
  "duration": 209188701,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_book_now_button()"
});
formatter.result({
  "duration": 148922800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_my_itinerary_button()"
});
formatter.result({
  "duration": 7078589200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.to_verify_whether_the_data_s_can_be_editable_or_not()"
});
formatter.result({
  "duration": 2854226699,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[0 result(s) found. Show all]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.cucumber.adactinstepdefinition.AdactinStepDefinition.to_verify_whether_the_data_s_can_be_editable_or_not(AdactinStepDefinition.java:424)\r\n\tat ✽.Then To verify whether the data\u0027s can be editable or not(AdactinPracticeEnd2End.feature:288)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 468180701,
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
formatter.before({
  "duration": 937400,
  "status": "passed"
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
  "duration": 966547100,
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
  "duration": 255777600,
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
  "duration": 227241000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 967662201,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 188702600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 193901399,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 190560500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 175460201,
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
  "duration": 232362600,
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
  "duration": 234931700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 1544472900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 139818900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 690837700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_firstname()"
});
formatter.result({
  "duration": 227386099,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_lastname()"
});
formatter.result({
  "duration": 208921300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_billingaddress()"
});
formatter.result({
  "duration": 206317700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_credit_card_number()"
});
formatter.result({
  "duration": 283253700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_credit_card_type()"
});
formatter.result({
  "duration": 193609999,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_month()"
});
formatter.result({
  "duration": 173174800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_year()"
});
formatter.result({
  "duration": 190147300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_cvv_number()"
});
formatter.result({
  "duration": 220610501,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_book_now_button()"
});
formatter.result({
  "duration": 128250600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_my_itinerary_button()"
});
formatter.result({
  "duration": 7283408200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.to_verify_whether_the_data_s_in_my_itinerary_page()"
});
formatter.result({
  "duration": 365944800,
  "status": "passed"
});
formatter.after({
  "duration": 675501,
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
formatter.before({
  "duration": 137199,
  "status": "passed"
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
  "duration": 479803599,
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
  "duration": 235509201,
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
  "duration": 213268000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 898382600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 179052900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 197033401,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 170075800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 174594901,
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
  "duration": 221363599,
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
  "duration": 224863800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 1632100001,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 133323201,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 693077701,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_firstname()"
});
formatter.result({
  "duration": 226232999,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_lastname()"
});
formatter.result({
  "duration": 215517500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_billingaddress()"
});
formatter.result({
  "duration": 322669300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_credit_card_number()"
});
formatter.result({
  "duration": 302541600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_credit_card_type()"
});
formatter.result({
  "duration": 184034500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_month()"
});
formatter.result({
  "duration": 186526900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_year()"
});
formatter.result({
  "duration": 179676400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_cvv_number()"
});
formatter.result({
  "duration": 212636800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_book_now_button()"
});
formatter.result({
  "duration": 123830601,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_my_itinerary_button()"
});
formatter.result({
  "duration": 7369254100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_type_the_order_id_in_the_search_order_field()"
});
formatter.result({
  "duration": 420482400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_go_button()"
});
formatter.result({
  "duration": 2381697200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.to_verify_whether_the_data_s_are_correct_as_per_the_order_id_entered()"
});
formatter.result({
  "duration": 54041999,
  "status": "passed"
});
formatter.after({
  "duration": 127800,
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
formatter.before({
  "duration": 86200,
  "status": "passed"
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
  "duration": 1575927600,
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
  "duration": 253487101,
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
  "duration": 224353499,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 1324735300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 195437500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 184184000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 189342700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 176266700,
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
  "duration": 242993900,
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
  "duration": 219181700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 1771608100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 166444200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 887044900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_firstname()"
});
formatter.result({
  "duration": 234653600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_lastname()"
});
formatter.result({
  "duration": 217395200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_billingaddress()"
});
formatter.result({
  "duration": 215161000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_credit_card_number()"
});
formatter.result({
  "duration": 266961100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_credit_card_type()"
});
formatter.result({
  "duration": 175981100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_month()"
});
formatter.result({
  "duration": 176504400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_year()"
});
formatter.result({
  "duration": 185456900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_cvv_number()"
});
formatter.result({
  "duration": 213424900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_book_now_button()"
});
formatter.result({
  "duration": 137957000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_my_itinerary_button()"
});
formatter.result({
  "duration": 7174884400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_type_the_order_id_in_the_search_order_field()"
});
formatter.result({
  "duration": 411700200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_go_button()"
});
formatter.result({
  "duration": 1620342500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.to_verify_whether_the_data_s_are_correct_in_the_booked_itinerary()"
});
formatter.result({
  "duration": 313135300,
  "status": "passed"
});
formatter.after({
  "duration": 88300,
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
  "name": "User type the order id in the search order field \"CO7JFTIBJY\"",
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
formatter.before({
  "duration": 87100,
  "status": "passed"
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
  "name": "User type the order id in the search order field \"CO7JFTIBJY\"",
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
  "duration": 453511300,
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
  "duration": 228898600,
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
  "duration": 193130900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 940834600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 172605700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 165848300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 177304800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 180892000,
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
  "duration": 238443300,
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
  "duration": 215774600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 863730700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 140785200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 666576200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_firstname()"
});
formatter.result({
  "duration": 244873600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_lastname()"
});
formatter.result({
  "duration": 208938800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_billingaddress()"
});
formatter.result({
  "duration": 215076600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_credit_card_number()"
});
formatter.result({
  "duration": 268818500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_credit_card_type()"
});
formatter.result({
  "duration": 191576300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_month()"
});
formatter.result({
  "duration": 178217200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_year()"
});
formatter.result({
  "duration": 194752400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_cvv_number()"
});
formatter.result({
  "duration": 216866700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_book_now_button()"
});
formatter.result({
  "duration": 127851100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_my_itinerary_button()"
});
formatter.result({
  "duration": 7535336000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CO7JFTIBJY",
      "offset": 50
    }
  ],
  "location": "AdactinStepDefinition.user_type_the_order_id_in_the_search_order_field(String)"
});
formatter.result({
  "duration": 426830600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_go_button()"
});
formatter.result({
  "duration": 1864018100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.to_verify_whether_the_order_is_cancelled_or_not()"
});
formatter.result({
  "duration": 100364347100,
  "error_message": "java.lang.RuntimeException\r\n\tat com.selenium.baseclass.BaseClass.clickOnTheElement(BaseClass.java:134)\r\n\tat com.cucumber.adactinstepdefinition.AdactinStepDefinition.to_verify_whether_the_order_is_cancelled_or_not(AdactinStepDefinition.java:511)\r\n\tat ✽.Then To verify whether the order is cancelled or not(AdactinPracticeEnd2End.feature:423)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 449319100,
  "status": "passed"
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
  "name": "User type the order id in the search order field \"Q780F0448C\"",
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
formatter.before({
  "duration": 80900,
  "status": "passed"
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
  "name": "User type the order id in the search order field \"Q780F0448C\"",
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
  "duration": 1928679300,
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
  "duration": 226152000,
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
  "duration": 220632900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 1081336800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 235173100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 238630600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 180311200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 185181900,
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
  "duration": 257162600,
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
  "duration": 238749500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 901414000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 170114400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 1085006100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_firstname()"
});
formatter.result({
  "duration": 682344100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_lastname()"
});
formatter.result({
  "duration": 219526300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_billingaddress()"
});
formatter.result({
  "duration": 231306200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_credit_card_number()"
});
formatter.result({
  "duration": 291269900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_credit_card_type()"
});
formatter.result({
  "duration": 183935500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_month()"
});
formatter.result({
  "duration": 189019300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_year()"
});
formatter.result({
  "duration": 197747800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_cvv_number()"
});
formatter.result({
  "duration": 216617900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_book_now_button()"
});
formatter.result({
  "duration": 129341600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_my_itinerary_button()"
});
formatter.result({
  "duration": 7676271100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Q780F0448C",
      "offset": 50
    }
  ],
  "location": "AdactinStepDefinition.user_type_the_order_id_in_the_search_order_field(String)"
});
formatter.result({
  "duration": 437090200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_go_button()"
});
formatter.result({
  "duration": 3870753800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_logout_button_in_booked_itinerary_page()"
});
formatter.result({
  "duration": 715013000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.to_verify_all_the_pages_loading_in_the_adactin_application()"
});
formatter.result({
  "duration": 50139534400,
  "error_message": "java.lang.RuntimeException\r\n\tat com.selenium.baseclass.BaseClass.getTextOfTheElement(BaseClass.java:273)\r\n\tat com.cucumber.adactinstepdefinition.AdactinStepDefinition.to_verify_all_the_pages_loading_in_the_adactin_application(AdactinStepDefinition.java:530)\r\n\tat ✽.Then To verify all the pages loading in the adactin application(AdactinPracticeEnd2End.feature:458)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 438725100,
  "status": "passed"
});
});