package com.cucumber.adactinstepdefinition;

import java.security.Key;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.cucumber.runner.TestRunner;
import com.helper.FileReaderManager;
import com.helper.PageObjectManager;
import com.selenium.baseclass.BaseClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AdactinStepDefinition extends BaseClass {
	
public static WebDriver driver=TestRunner.driver;
    
	PageObjectManager pm=new PageObjectManager(driver);
	
@Given("^Launch hotel reservation application$")
public void launch_hotel_reservation_application() throws Throwable {
	String url = FileReaderManager.getInstance().getCr().getUrl();
	geturl(url);    
}

@When("^User enter the username \"([^\"]*)\" in the username field$")
public void user_enter_the_username_in_the_username_field(String arg1) throws Throwable {
	inputValueToTheElement(pm.getadhp().getUsername(),arg1);
}

@When("^User enter the password \"([^\"]*)\" in the password field$")
public void user_enter_the_password_in_the_password_field(String arg1) throws Throwable {
	inputValueToTheElement(pm.getadhp().getPassword(),arg1);
    
}

@When("^User click on the login button$")
public void user_click_on_the_login_button() throws Throwable {
	clickOnTheElement(pm.getadhp().getLoginbtn());
    }


@When("^User select the location in the list$")
public void user_select_the_location_in_the_list() throws Throwable {
    dropdDownForValue(pm.getadhp().getSelectlocation(), "Sydney");

}

@When("^User select the available hotels in the list$")
public void user_select_the_available_hotels_in_the_list() throws Throwable {
 dropdDownForValue(pm.getadhp().getHotelsavailable(), "Hotel Sunshine");    

}

@When("^User select the roomtype in the list$")
public void user_select_the_roomtype_in_the_list() throws Throwable {
	dropdDownForValue(pm.getadhp().getRoomtype(), "Standard");
    

}

@When("^User select the number of rooms in the list$")
public void user_select_the_number_of_rooms_in_the_list() throws Throwable {
    dropdDownForValue(pm.getadhp().getNumberofrooms(), "2");
}

@When("^User select the number of rooms in the list \"([^\"]*)\"$")
public void user_select_the_number_of_rooms_in_the_list(String arg1) throws Throwable {
 dropdDownForIndex(pm.getadhp().getNumberofrooms(), arg1);   
}

@When("^User select the check in date as \"([^\"]*)\"$")
public void user_select_the_check_in_date_as(String arg1) throws Throwable {
    inputValueToTheElement(pm.getadhp().getCheckindate(), arg1);
}

@When("^User select the check out date as \"([^\"]*)\"$")
public void user_select_the_check_out_date_as(String arg1) throws Throwable {
    inputValueToTheElement(pm.getadhp().getCheckoutdate(), arg1);
}

@Then("^Verify that system gives an error saying check-in-date should not be later than check-out-date$")
public void verify_that_system_gives_an_error_saying_check_in_date_should_not_be_later_than_check_out_date() throws Throwable {
Thread.sleep(2000);
	Assert.assertEquals("Check-In Date shall be before than Check-Out Date", getTextOfTheElement(pm.getadhp().getCheckinandcheckoutvalidation()));
}

@When("^User select the adults per room$")
public void user_select_the_adults_per_room() throws Throwable {
dropDownForText(pm.getadhp().getAdultsperroom(), "1");
}

@When("^User select the children per room$")
public void user_select_the_children_per_room() throws Throwable {
dropdDownForValue(pm.getadhp().getChildrenperroom(), "2");
}

@When("^User click on the search button to check the Availablity of the selected hotel$")
public void user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel() throws Throwable {
    clickOnTheElement(pm.getadhp().getSearchbutton());

}

@Then("^Verify that the error message saying enter the valid dates$")
public void verify_that_the_error_message_saying_enter_the_valid_dates() throws Throwable {
//debug error    
}
@Then("^Verify that hotel location and hotel name displayed is the same as selected in search Hotel form$")
public void verify_that_hotel_location_and_hotel_name_displayed_is_the_same_as_selected_in_search_Hotel_form() throws Throwable {
    Assert.assertEquals("Sydney", getAttributeOfTheElement(pm.getadhp().getSelectedlocation()));
    Assert.assertEquals("Hotel Sunshine", getAttributeOfTheElement(pm.getadhp().getSelectedhotelname()));
}



@Then("^Verify the check in and check out date displayed is the same as selected in search Hotel form$")
public void verify_the_check_in_and_check_out_date_displayed_is_the_same_as_selected_in_search_Hotel_form() throws Throwable {
    Assert.assertEquals("27/06/2019", getAttributeOfTheElement(pm.getadhp().getArrivaldate()));
    Assert.assertEquals("28/06/2019", getAttributeOfTheElement(pm.getadhp().getDeparturedate()));
    		}



@Then("^Verify the no of rooms selected in search Hotel form$")
public void verify_the_no_of_rooms_selected_in_search_Hotel_form() throws Throwable {
   Assert.assertEquals("2 Rooms", getAttributeOfTheElement(pm.getadhp().getNoofroomsselectedvalidate()));

}


@Then("^Verify the rooms type selected in search Hotel form$")
public void verify_the_rooms_type_selected_in_search_Hotel_form() throws Throwable {
   Assert.assertEquals("Standard", getAttributeOfTheElement(pm.getadhp().getRoomstypevalidate()));
  
}

@When("^User click on the radio button for selecting the hotel$")
public void user_click_on_the_radio_button_for_selecting_the_hotel() throws Throwable {
    clickOnTheElement(pm.getadhp().getRadiobutton());
}

@When("^User click on the continue button$")
public void user_click_on_the_continue_button() throws Throwable {
	clickOnTheElement(pm.getadhp().getContinuebutton());
    
}

@Then("^Verify that totalprice\\(excl\\.GST\\) is being calculated as \\(price-per-night\\*noof-rooms\\*no-of-days\\)$")
public void verify_that_totalprice_excl_GST_is_being_calculated_as_price_per_night_noof_rooms_no_of_days() throws Throwable {
String noofdays = getAttributeOfTheElement(pm.getadhp().getTotaldays());
String pricepernight = getAttributeOfTheElement(pm.getadhp().getPricepernight());
String noofrooms = getAttributeOfTheElement(pm.getadhp().getNumberofroomsinfinal());
String totalpriceexcelGST = getAttributeOfTheElement(pm.getadhp().getTotalpriceexcelGST());

String noofdaystrim = noofdays.substring(0, 1).trim();
System.out.println(noofdaystrim);
String pricepernighttrim = pricepernight.substring(5).trim();
System.out.println(pricepernighttrim);
String noofroomstrim = noofrooms.substring(0, 1).trim();
System.out.println(noofroomstrim);
int totalPrice=Integer.parseInt(noofroomstrim)*Integer.parseInt(noofdaystrim)*Integer.parseInt(pricepernighttrim);
System.out.println(totalPrice);

String totprice = String.valueOf(totalPrice);
if (totalpriceexcelGST.contains(totprice)) {
	System.out.println("Total price is same as calculated");
	
}
else {
	System.out.println("total price is not same");
}
}


@When("^User select the \"([^\"]*)\" in the list$")
public void user_select_the_in_the_list(String arg1) throws Throwable {
dropdDownForIndex(pm.getadhp().getSelectedlocation(), "1");
dropdDownForIndex(pm.getadhp().getSelectedhotelname(), "2");

}



@When("^User enter the firstname$")
public void user_enter_the_firstname() throws Throwable {

inputValueToTheElement(pm.getadhp().getFirstname(), "rathi");
}

@When("^User enter the lastname$")
public void user_enter_the_lastname() throws Throwable {

inputValueToTheElement(pm.getadhp().getLastname(), "raja");
}

@When("^User enter the billingaddress$")
public void user_enter_the_billingaddress() throws Throwable {

inputValueToTheElement(pm.getadhp().getBillingaddress(), "no.sydney");
}

@When("^User enter the credit card number$")
public void user_enter_the_credit_card_number() throws Throwable {

inputValueToTheElement(pm.getadhp().getCreditcardno(), "1234567890987654");
}

@When("^User select the credit card type$")
public void user_select_the_credit_card_type() throws Throwable {

dropdDownForValue(pm.getadhp().getCreditcardtype(), "MAST");
}

@When("^User select the expiry month$")
public void user_select_the_expiry_month() throws Throwable {

dropdDownForValue(pm.getadhp().getCreditcardexpmonth(), "1");
}

@When("^User select the expiry year$")
public void user_select_the_expiry_year() throws Throwable {
dropdDownForValue(pm.getadhp().getCreditcardexpyear(), "2020");

}

@When("^User enter the cvv number$")
public void user_enter_the_cvv_number() throws Throwable {
inputValueToTheElement(pm.getadhp().getCvvnumber(), "1234");

}



@When("^User click on the book now button$")
public void user_click_on_the_book_now_button() throws Throwable {
clickOnTheElement(pm.getadhp().getBooknowbtn());

}

@When("^User click on the logout button$")
public void user_click_on_the_logout_button() throws Throwable {

clickOnTheElement(pm.getadhp().getLogoutbtn());
}

@Then("^To verify whether the hotel is booked and to verify the logout$")
public void to_verify_whether_the_hotel_is_booked_and_to_verify_the_logout() throws Throwable {
	Assert.assertEquals("You have successfully logged out. Click here to login again",getTextOfTheElement(pm.getadhp().getLogoutvalidate()));
		}

@Then("^To verify the total-price as \\(price-pernight\\*no-ofrooms\\*no-ofdays\\+(\\d+)% GST\\) in book a hotel page$")
public void to_verify_the_total_price_as_price_pernight_no_ofrooms_no_ofdays_GST_in_book_a_hotel_page(int arg1) throws Throwable {
	String noofdays = getAttributeOfTheElement(pm.getadhp().getTotaldays());
	String pricepernight = getAttributeOfTheElement(pm.getadhp().getPricepernight());
	String noofrooms = getAttributeOfTheElement(pm.getadhp().getNumberofroomsinfinal());
	String finalbillingprice = getAttributeOfTheElement(pm.getadhp().getFinalBilledPrice());
	
	String noofdaystrim = noofdays.substring(0, 1).trim();
	System.out.println(noofdaystrim);
	String pricepernighttrim = pricepernight.substring(5).trim();
	System.out.println(pricepernighttrim);
	String noofroomstrim = noofrooms.substring(0, 1).trim();
	System.out.println(noofroomstrim);

int finalPrice=Integer.parseInt(noofroomstrim)*Integer.parseInt(noofdaystrim)*Integer.parseInt(pricepernighttrim);
System.out.println(finalPrice);

int gst=finalPrice/10;
System.out.println("GST="+gst);

int price=gst+finalPrice;
System.out.println(price);
String fprice = String.valueOf(price);
if (finalbillingprice.contains(fprice)) {
	System.out.println("Final price is sama as calculated");
	
}
else {
	System.out.println("Final price is not same");
}
}


@Then("^Verify that totalprice\\(excl\\.GST\\) is being calculated as \\(price-per-night\\*noof-rooms\\*no-of-days\\) and checking the provided data's$")
public void verify_that_totalprice_excl_GST_is_being_calculated_as_price_per_night_noof_rooms_no_of_days_and_checking_the_provided_data_s() throws Throwable {

	String noofdays = getAttributeOfTheElement(pm.getadhp().getTotaldays());
	String pricepernight = getAttributeOfTheElement(pm.getadhp().getPricepernight());
	String noofrooms = getAttributeOfTheElement(pm.getadhp().getNumberofroomsinfinal());
	String totalpriceexcelGST = getAttributeOfTheElement(pm.getadhp().getTotalpriceexcelGST());

	
	String noofdaystrim = noofdays.substring(0, 1).trim();
	System.out.println(noofdaystrim);
	String pricepernighttrim = pricepernight.substring(5).trim();
	System.out.println(pricepernighttrim);
	String noofroomstrim = noofrooms.substring(0, 1).trim();
	System.out.println(noofroomstrim);
	int totalPrice=Integer.parseInt(noofroomstrim)*Integer.parseInt(noofdaystrim)*Integer.parseInt(pricepernighttrim);
	System.out.println(totalPrice);
	String totprice = String.valueOf(totalPrice);
if (totalpriceexcelGST.contains(totprice)) {
	

	System.out.println("Total price is same as calculated");
		
	}
	else {
		System.out.println("total price is not same");
	}
Assert.assertEquals("Hotel Sunshine", getAttributeOfTheElement(pm.getadhp().getHotelselectedinbookpage()));
Assert.assertEquals("Sydney", getAttributeOfTheElement(pm.getadhp().getLocationvalidateinbookpage()));	
Assert.assertEquals("Standard", getAttributeOfTheElement(pm.getadhp().getRoomtypevalidatebookpage()));
Assert.assertEquals("1 Day(s)", getAttributeOfTheElement(pm.getadhp().getTotaldays()));


String pricepernightvalidate = String.valueOf(pricepernight);
if (pricepernight.contains(pricepernightvalidate)) {
	System.out.println("Price per night calculated is same ="+pricepernight.substring(5).trim());
}
else {
	System.out.println("price per night calculated is not same");
}
}


@Then("^To verify the final billed price as \\(price-pernight\\*no-ofrooms\\*no-ofdays\\+(\\d+)% GST\\) in book a hotel page$")
public void to_verify_the_final_billed_price_as_price_pernight_no_ofrooms_no_ofdays_GST_in_book_a_hotel_page(int arg1) throws Throwable {
	String noofdays = getAttributeOfTheElement(pm.getadhp().getTotaldays());
	String pricepernight = getAttributeOfTheElement(pm.getadhp().getPricepernight());
	String noofrooms = getAttributeOfTheElement(pm.getadhp().getNumberofroomsinfinal());
	String finalbillingprice=getAttributeOfTheElement(pm.getadhp().getFinalBilledPrice());

	String noofdaystrim = noofdays.substring(0, 1).trim();
	System.out.println(noofdaystrim);
	String pricepernighttrim = pricepernight.substring(5).trim();
	System.out.println(pricepernighttrim);
	String noofroomstrim = noofrooms.substring(0, 1).trim();
	System.out.println(noofroomstrim);
	int finalPrice=Integer.parseInt(noofroomstrim)*Integer.parseInt(noofdaystrim)*Integer.parseInt(pricepernighttrim);
	System.out.println(finalPrice);

	int gst=finalPrice/10;
	System.out.println("GST="+gst);

	int price=gst+finalPrice;
	System.out.println(price);
	String fprice = String.valueOf(price);
	if (finalbillingprice.contains(fprice)) {
		System.out.println("Final price is sama as calculated");
		
	}
	else {
		System.out.println("Final price is not same");
	}
	
	}


@Then("^To verify the total-price as \\(price-pernight\\*no-ofrooms\\*no-ofdays\\) in book a hotel page$")
public void to_verify_the_total_price_as_price_pernight_no_ofrooms_no_ofdays_in_book_a_hotel_page() throws Throwable {
	
	String noofdays = getAttributeOfTheElement(pm.getadhp().getTotaldays());
	String pricepernight = getAttributeOfTheElement(pm.getadhp().getPricepernight());
	String noofrooms = getAttributeOfTheElement(pm.getadhp().getNumberofroomsinfinal());
	String totalpriceexcelGST = getAttributeOfTheElement(pm.getadhp().getTotalpriceexcelGST());

	String noofdaystrim = noofdays.substring(0, 1).trim();
	System.out.println(noofdaystrim);
	String pricepernighttrim = pricepernight.substring(5).trim();
	System.out.println(pricepernighttrim);
	String noofroomstrim = noofrooms.substring(0, 1).trim();
	System.out.println(noofroomstrim);
	int totalPrice=Integer.parseInt(noofroomstrim)*Integer.parseInt(noofdaystrim)*Integer.parseInt(pricepernighttrim);
	System.out.println(totalPrice);

	String totprice = String.valueOf(totalPrice);
	if (totalpriceexcelGST.contains(totprice)) {
		System.out.println("Total price is same as calculated");
		
	}
	else {
		System.out.println("total price is not same");
	}
	Assert.assertEquals("Hotel Sunshine", getAttributeOfTheElement(pm.getadhp().getHotelselectedinbookpage()));
	Assert.assertEquals("Sydney", getAttributeOfTheElement(pm.getadhp().getLocationvalidateinbookpage()));	
	Assert.assertEquals("Standard", getAttributeOfTheElement(pm.getadhp().getRoomtypevalidatebookpage()));
	Assert.assertEquals("1 Day(s)", getAttributeOfTheElement(pm.getadhp().getTotaldays()));
	System.out.println("Check in and check out dates are available only in search hotel page");
	System.out.println("Adutls and childrens selected available only in search hotel page");
	}
@Then("^To verify whether the hotel order number is generated or not$")
public void to_verify_whether_the_hotel_order_number_is_generated_or_not() throws Throwable {
 String ordernymbergenrated = getAttributeOfTheElement(pm.getadhp().getOrdernumbervalidate());
 if (ordernymbergenrated.equalsIgnoreCase("A0E0PQ204B")) {
	 System.out.println("order number generated");
	
}
 else {
	System.out.println("new order number generated");
}
}


@When("^User click on the my itinerary button$")
public void user_click_on_the_my_itinerary_button() throws Throwable {
   clickOnTheElement(pm.getadhp().getMyitinerarybtn());
}

@Then("^To verify whether the data's can be editable or not$")
public void to_verify_whether_the_data_s_can_be_editable_or_not() throws Throwable {
inputValueToTheElement(pm.getadhp().getHotelnamevalidateeditableornot(), "123");
Robotclass(pm.getadhp().getHotelnamevalidateeditableornot());
Assert.assertEquals("0 result(s) found. Show all",getTextOfTheElement(pm.getadhp().getDatascannotbeeditable()));
		}



@Then("^To verify whether the data's in my itinerary page$")
public void to_verify_whether_the_data_s_in_my_itinerary_page() throws Throwable {
  
	String  ordernymbergenrated= getAttributeOfTheElement(pm.getadhp().getOrdernumberinmyItinerarypage());
	if (ordernymbergenrated.equalsIgnoreCase("A5383YAF9C")) {
		 System.out.println("order number generated");
		
	}
	 else {
		System.out.println("new order number generated");
	}
	
	Assert.assertEquals("Cancel A5383YAF9C", getAttributeOfTheElement(pm.getadhp().getCancelordernumberinmyItinerarypage()));
	Assert.assertEquals("Hotel Sunshine", getAttributeOfTheElement(pm.getadhp().getHotelnameinmyItinerarypage()));
	Assert.assertEquals("Sydney", getAttributeOfTheElement(pm.getadhp().getHotellocationinmyItinerarypage()));	
	Assert.assertEquals("2 Rooms", getAttributeOfTheElement(pm.getadhp().getRoomsbookedinmyItinerarypage()));
	Assert.assertEquals("1 Days", getAttributeOfTheElement(pm.getadhp().getNumberofdaysinmyItinerarypage()));
    Assert.assertEquals("Standard", getAttributeOfTheElement(pm.getadhp().getRoomtypeinmyItinerarypage()));
    Assert.assertEquals("rathi", getAttributeOfTheElement(pm.getadhp().getFirstnameinmyItinerarypage()));
    Assert.assertEquals("raja", getAttributeOfTheElement(pm.getadhp().getLastnameinmyItinerarypage()));
    Assert.assertEquals("06/07/2019", getAttributeOfTheElement(pm.getadhp().getCheckindateinmyItinerarypage()));
    Assert.assertEquals("07/07/2019", getAttributeOfTheElement(pm.getadhp().getCheckoutdateinmyItinerarypage()));
    Assert.assertEquals("AUD $ 175", getAttributeOfTheElement(pm.getadhp().getPricepernightinmyItinerarypage()));
	Assert.assertEquals("AUD $ 204", getAttributeOfTheElement(pm.getadhp().getTotalpriceinclGSTinmyItinerarypage()));
}





@When("^User type the order id in the search order field$")
public void user_type_the_order_id_in_the_search_order_field() throws Throwable {
    inputValueToTheElement(pm.getadhp().getSearchOrderId(), "A5383YAF9C");
}

@When("^User click on go button$")
public void user_click_on_go_button() throws Throwable {
    clickOnTheElement(pm.getadhp().getGobutton());
}

@Then("^To verify whether the data's are correct as per the order id entered$")
public void to_verify_whether_the_data_s_are_correct_as_per_the_order_id_entered() throws Throwable {

	Assert.assertEquals("1 result(s) found. Show all", getTextOfTheElement(pm.getadhp().getSearchedorderedidiscorrect()));
}



@Then("^To verify whether the data's are correct in the booked itinerary$")
public void to_verify_whether_the_data_s_are_correct_in_the_booked_itinerary() throws Throwable {
    
	Assert.assertEquals("A5383YAF9C", getAttributeOfTheElement(pm.getadhp().getOrdernumberinbookedItinerary()));
    Assert.assertEquals("Cancel A5383YAF9C", getAttributeOfTheElement(pm.getadhp().getCancelordernumberinbookedItinerary()));
    Assert.assertEquals("Hotel Sunshine", getAttributeOfTheElement(pm.getadhp().getHotelnameinbookedItinerary()));
    Assert.assertEquals("Sydney", getAttributeOfTheElement(pm.getadhp().getHotellocationinbookeditenerary()));
    Assert.assertEquals("2 Rooms", getAttributeOfTheElement(pm.getadhp().getNumberofroomsinbookeditinerary()));
    Assert.assertEquals("rathi", getAttributeOfTheElement(pm.getadhp().getFirstnameinbookeditinerary()));
    Assert.assertEquals("raja", getAttributeOfTheElement(pm.getadhp().getLastnameinbookeditinerary()));
    Assert.assertEquals("06/07/2019", getAttributeOfTheElement(pm.getadhp().getArrivaldateinbookeditinerary()));
    Assert.assertEquals("07/07/2019", getAttributeOfTheElement(pm.getadhp().getDeparturedateinbookeditinerary()));
    Assert.assertEquals("1 Days", getAttributeOfTheElement(pm.getadhp().getNumberofdaysinbookeditinerary()));
    Assert.assertEquals("Standard", getAttributeOfTheElement(pm.getadhp().getRoomtypeinbookeditinerary()));
    Assert.assertEquals("AUD $ 175", getAttributeOfTheElement(pm.getadhp().getPricepernightinbookeditinerary())); 
    Assert.assertEquals("AUD $ 204", getAttributeOfTheElement(pm.getadhp().getTotalpriceinclGSTinbookeditinerary()));
    
    
}


@When("^User type the order id in the search order field \"([^\"]*)\"$")
public void user_type_the_order_id_in_the_search_order_field(String arg1) throws Throwable {
   inputValueToTheElement(pm.getadhp().getSearchOrderId(), arg1);
}

@Then("^To verify whether the order is cancelled or not$")
public void to_verify_whether_the_order_is_cancelled_or_not() throws Throwable {
	clickOnTheElement(pm.getadhp().getCancelordercheckbox());

WebElement cancelorderbutton = driver.findElement(By.xpath("//*[@id=\"booked_form\"]/table/tbody/tr[3]/td/input[1]"));
cancelorderbutton.click();
driver.switchTo().alert();

Alert alert=driver.switchTo().alert();
alert.accept();

Assert.assertEquals("Booked Itinerary", getTextOfTheElement(pm.getadhp().getCheckingtherevelantbookeditinerarypageaftercancelled()));
}

@When("^User click on logout button in booked itinerary page$")
public void user_click_on_logout_button_in_booked_itinerary_page() throws Throwable {
 clickOnTheElement(pm.getadhp().getLogoutbtninbookeditinerarypage());   
}

@Then("^To verify all the pages loading in the adactin application$")
public void to_verify_all_the_pages_loading_in_the_adactin_application() throws Throwable {
    Assert.assertEquals("Existing User Login - Build 1", getTextOfTheElement(pm.getadhp().getLoginpagevalidate()));
    Assert.assertEquals("Select Hotel", getTextOfTheElement(pm.getadhp().getSearchhotelpagevalidate()));
    Assert.assertEquals("Book A Hotel", getTextOfTheElement(pm.getadhp().getBookahotelpagevalidate()));
    Assert.assertEquals("Booking Confirmation", getTextOfTheElement(pm.getadhp().getBookingconfirmationpagevalidate()));
    Assert.assertEquals("Booked Itinerary", getTextOfTheElement(pm.getadhp().getBookedItinerarypagevalidate()));
    Assert.assertEquals("You have successfully logged out.Click here to login again", getTextOfTheElement(pm.getadhp().getLogoutbtninbookeditinerarypage()));
}
}







		



