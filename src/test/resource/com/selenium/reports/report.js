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
  "duration": 362700,
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
  "duration": 8104993400,
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
  "duration": 910554300,
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
  "duration": 696806000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 4734651300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 348985000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 263216500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 214457200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 210264400,
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
  "duration": 305534300,
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
  "duration": 253475900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 290760100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_that_system_gives_an_error_saying_check_in_date_should_not_be_later_than_check_out_date()"
});
formatter.result({
  "duration": 2778423300,
  "status": "passed"
});
formatter.after({
  "duration": 238500,
  "status": "passed"
});
});