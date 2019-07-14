package com.selenium.adactinpom;

import org.openqa.selenium.WebDriver;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AdactinHomePage {
public WebDriver driver;
public AdactinHomePage(WebDriver ldriver) {
	this.driver=ldriver;
	PageFactory.initElements(driver, this);
}
@FindBy(xpath="//input[@id=\"username\"]")
private WebElement username;

@FindBy(xpath="//input[@id=\"password\"]")
private WebElement password;

@FindBy(xpath="//input[@id=\"login\"]")
private WebElement loginbtn;

@FindBy(xpath="//select[@id=\"location\"]")
private WebElement selectlocation;

@FindBy(xpath="//option[text()=\"Sydney\"]")
private WebElement sydney;

@FindBy(xpath="//select[@id=\"hotels\"]")
private WebElement hotelsavailable;

@FindBy(xpath="//option[text()=\"Hotel Sunshine\"]")
private WebElement Hotelsunshine;

@FindBy(xpath="//select[@id=\"room_type\"]")
private WebElement Roomtype;

@FindBy(xpath="//option[text()=\"Standard\"]")
private WebElement standardroom;

@FindBy(xpath="//select[@id=\"room_nos\"]")
private WebElement numberofrooms;

@FindBy(xpath="//*[@id=\"room_nos\"]/option[2]")
private WebElement Oneroom;

@FindBy(xpath="//*[@id=\"room_nos\"]/option[4]")
private WebElement threerooms;

@FindBy(xpath="//input[@id=\"datepick_in\"]")
private WebElement checkindate;

@FindBy(xpath="//input[@id=\"datepick_out\"]")
private WebElement checkoutdate;

@FindBy(xpath="//select[@id=\"adult_room\"]")
private WebElement adultsperroom;

@FindBy(xpath="//select[@id=\"adult_room\"]")
private WebElement oneadultsinaroom;

@FindBy(xpath="//select[@id=\"child_room\"]")
private WebElement childrenperroom;

@FindBy(xpath="//select[@id=\"child_room\"]")
private WebElement onechildreninaroom;

@FindBy(xpath="//span[text()=\"Check-In Date shall be before than Check-Out Date\"]")
private WebElement checkinandcheckoutvalidation;

@FindBy(xpath="//input[@id=\"Submit\"]")
private WebElement searchbutton;

@FindBy(xpath="//input[@id=\"location_0\"]")
private WebElement selectedlocation;

@FindBy(xpath="//input[@id=\"hotel_name_0\"]")
private WebElement selectedhotelname;

@FindBy(xpath="//*[@id=\"arr_date_0\"]")
private WebElement arrivaldate;

@FindBy(xpath="//input[@id=\"dep_date_0\"]")
private WebElement departuredate;

@FindBy(xpath="//input[@id=\"rooms_0\"]")
private WebElement noofroomsselectedvalidate;

@FindBy(xpath="//input[@id=\"room_type_0\"]")
private WebElement roomstypevalidate;

@FindBy(xpath="//input[@id=\"radiobutton_0\"]")
private WebElement radiobutton;

@FindBy(xpath="//input[@id=\"continue\"]")
private WebElement continuebutton;

@FindBy(xpath="//input[@id=\"room_num_dis\"]")
private WebElement Numberofroomsinfinal;

public WebElement getNumberofroomsinfinal() {
	return Numberofroomsinfinal;
}
@FindBy(xpath="//input[@id=\"total_days_dis\"]")
private WebElement totaldays;

@FindBy(xpath="//input[@id=\"price_night_dis\"]")
private WebElement pricepernight;

@FindBy(xpath="//input[@id=\"total_price_dis\"]")
private WebElement totalpriceexcelGST;

@FindBy(xpath="//input[@id=\"first_name\"]")
private WebElement firstname;

@FindBy(xpath="//input[@id=\"final_price_dis\"]")
private WebElement FinalBilledPrice; 	

@FindBy(xpath="//input[@id=\"hotel_name_dis\"]")
private WebElement hotelselectedinbookpage;

@FindBy(xpath="//input[@id=\"location_dis\"]")
private WebElement locationvalidateinbookpage;

@FindBy(xpath="//input[@id=\"room_type_dis\"]")
private WebElement roomtypevalidatebookpage;

@FindBy(xpath="//input[@id=\"order_no\"]")
private WebElement ordernumbervalidate;

@FindBy(xpath="//*[@id=\"my_itinerary\"]")
private WebElement myitinerarybtn;

@FindBy(xpath="//*[@id=\"hotel_name_304573\"]")
private WebElement hotelnamevalidateeditableornot;

@FindBy(xpath="//*[@id=\"search_result_error\"]")
private WebElement datascannotbeeditable;


@FindBy(xpath="//*[@id=\"order_no\"]")
private WebElement ordernumbergenerating;


@FindBy(xpath="//*[@id=\"order_id_304582\"]")
private WebElement ordernumberinmyItinerarypage;

@FindBy(xpath="//*[@id=\"btn_id_304582\"]")
private WebElement cancelordernumberinmyItinerarypage;

@FindBy(xpath="//*[@id=\"hotel_name_304582\"]")
private WebElement hotelnameinmyItinerarypage;

@FindBy(xpath="//*[@id=\"location_304582\"]")
private WebElement hotellocationinmyItinerarypage;


@FindBy(xpath="//*[@id=\"rooms_304582\"]")
private WebElement roomsbookedinmyItinerarypage;

@FindBy(xpath="//*[@id=\"first_name_304582\"]")
private WebElement firstnameinmyItinerarypage;

@FindBy(xpath="//*[@id=\"last_name_304582\"]")
private WebElement lastnameinmyItinerarypage;

@FindBy(xpath="//*[@id=\"arr_date_304582\"]")
private WebElement checkindateinmyItinerarypage;

@FindBy(xpath="//*[@id=\"dep_date_304582\"]")
private WebElement checkoutdateinmyItinerarypage;



@FindBy(xpath="//*[@id=\"no_days_304582\"]")
private WebElement numberofdaysinmyItinerarypage;

@FindBy(xpath="//*[@id=\"room_type_304582\"]")
private WebElement roomtypeinmyItinerarypage;

@FindBy(xpath="//*[@id=\"price_night_304582\"]")
private WebElement pricepernightinmyItinerarypage;

@FindBy(xpath="//*[@id=\"total_price_304582\"]")
private WebElement totalpriceinclGSTinmyItinerarypage;

@FindBy(xpath="//*[@id=\"search_result_error\"]")
private WebElement searchedorderedidiscorrect;

public WebElement getSearchedorderedidiscorrect() {
	return searchedorderedidiscorrect;
}
@FindBy(xpath="//*[@id=\"order_id_text\"]")
private WebElement SearchOrderId;


@FindBy(xpath="//*[@id=\"booked_form\"]/table/tbody/tr[2]/td/table/tbody/tr[2]/td[1]/input")
private WebElement cancelordercheckbox;

public WebElement getCancelordercheckbox() {
	return cancelordercheckbox;
}
public WebElement getClickoncancelorderbutton() {
	return clickoncancelorderbutton;
}
@FindBy(xpath="//*[@id=\"booked_form\"]/table/tbody/tr[3]/td/input[1]")
private WebElement clickoncancelorderbutton;

@FindBy(xpath="//*[@id=\"booked_form\"]/table/tbody/tr[1]/td/table/tbody/tr/td[1]")
private WebElement checkingtherevelantbookeditinerarypageaftercancelled;


@FindBy(xpath="//*[@id=\"login_form\"]/table/tbody/tr[1]/td")
private WebElement loginpagevalidate;

@FindBy(xpath="/html/body/table[2]/tbody/tr[1]/td[2]/a[4]")
private WebElement logoutbtninbookeditinerarypage;

public WebElement getLogoutbtninbookeditinerarypage() {
	return logoutbtninbookeditinerarypage;
}
public WebElement getLogoutpagevalidate() {
	return logoutpagevalidate;
}
public WebElement getLoginpagevalidate() {
	return loginpagevalidate;
}
public WebElement getSearchhotelpagevalidate() {
	return Searchhotelpagevalidate;
}
public WebElement getBookahotelpagevalidate() {
	return Bookahotelpagevalidate;
}
public WebElement getBookingconfirmationpagevalidate() {
	return Bookingconfirmationpagevalidate;
}
public WebElement getBookedItinerarypagevalidate() {
	return BookedItinerarypagevalidate;
}
@FindBy(xpath="//*[@id=\"search_form\"]/table/tbody/tr[1]/td")
private WebElement Searchhotelpagevalidate;


@FindBy(xpath="//*[@id=\"book_hotel_form\"]/table/tbody/tr[2]/td")
private WebElement Bookahotelpagevalidate;

@FindBy(xpath="//*[@id=\"booking_form\"]/table/tbody/tr[1]/td")
private WebElement Bookingconfirmationpagevalidate;

@FindBy(xpath="//*[@id=\"booked_form\"]/table/tbody/tr[1]/td/table/tbody/tr/td[1]")
private WebElement BookedItinerarypagevalidate;

@FindBy(xpath="/html/body/table[2]/tbody/tr/td[1]/table/tbody/tr/td")
private WebElement logoutpagevalidate;

public WebElement getCheckingtherevelantbookeditinerarypageaftercancelled() {
	return checkingtherevelantbookeditinerarypageaftercancelled;
}
public WebElement getOrdernumberinbookedItinerary() {
	return ordernumberinbookedItinerary;
}
public WebElement getCancelordernumberinbookedItinerary() {
	return cancelordernumberinbookedItinerary;
}
public WebElement getHotelnameinbookedItinerary() {
	return hotelnameinbookedItinerary;
}
public WebElement getHotellocationinbookeditenerary() {
	return hotellocationinbookeditenerary;
}
public WebElement getNumberofroomsinbookeditinerary() {
	return numberofroomsinbookeditinerary;
}
public WebElement getFirstnameinbookeditinerary() {
	return firstnameinbookeditinerary;
}
public WebElement getLastnameinbookeditinerary() {
	return lastnameinbookeditinerary;
}
public WebElement getArrivaldateinbookeditinerary() {
	return arrivaldateinbookeditinerary;
}
public WebElement getDeparturedateinbookeditinerary() {
	return departuredateinbookeditinerary;
}
public WebElement getNumberofdaysinbookeditinerary() {
	return numberofdaysinbookeditinerary;
}
public WebElement getRoomtypeinbookeditinerary() {
	return roomtypeinbookeditinerary;
}
public WebElement getPricepernightinbookeditinerary() {
	return pricepernightinbookeditinerary;
}
public WebElement getTotalpriceinclGSTinbookeditinerary() {
	return totalpriceinclGSTinbookeditinerary;
}
@FindBy(xpath="//*[@id=\"order_id_304582\"]")
private WebElement ordernumberinbookedItinerary;

@FindBy(xpath="//*[@id=\"btn_id_304582\"]")
private WebElement cancelordernumberinbookedItinerary;

@FindBy(xpath="//*[@id=\"hotel_name_304582\"]")
private WebElement hotelnameinbookedItinerary;

@FindBy(xpath="//*[@id=\"location_304582\"]")
private WebElement hotellocationinbookeditenerary;

@FindBy(xpath="//*[@id=\"rooms_304582\"]")
private WebElement numberofroomsinbookeditinerary;

@FindBy(xpath="//*[@id=\"first_name_304582\"]")
private WebElement firstnameinbookeditinerary;

@FindBy(xpath="//*[@id=\"last_name_304582\"]")
private WebElement lastnameinbookeditinerary;

@FindBy(xpath="//*[@id=\"arr_date_304582\"]")
private WebElement arrivaldateinbookeditinerary;

@FindBy(xpath="//*[@id=\"dep_date_304582\"]")
private WebElement departuredateinbookeditinerary;

@FindBy(xpath="//*[@id=\"no_days_304582\"]")
private WebElement numberofdaysinbookeditinerary;

@FindBy(xpath="//*[@id=\"room_type_304582\"]")
private WebElement roomtypeinbookeditinerary;

@FindBy(xpath="//*[@id=\"price_night_304582\"]")
private WebElement pricepernightinbookeditinerary;

@FindBy(xpath="//*[@id=\"total_price_304582\"]")
private WebElement totalpriceinclGSTinbookeditinerary;


















public WebElement getSearchOrderId() {
	return SearchOrderId;
}
public WebElement getGobutton() {
	return Gobutton;
}
@FindBy(xpath="//*[@id=\"search_hotel_id\"]")
private WebElement Gobutton;

@FindBy(xpath="//input[@id=\"last_name\"]")
private WebElement lastname;

@FindBy(xpath="//textarea[@id=\"address\"]")
private WebElement billingaddress;

@FindBy(xpath="//input[@id=\"cc_num\"]")
private WebElement creditcardno;

@FindBy(xpath="//select[@id=\"cc_type\"]")
private WebElement creditcardtype;

@FindBy(xpath="//select[@id=\"cc_exp_month\"]")
private WebElement creditcardexpmonth;

@FindBy(xpath="//select[@id=\"cc_exp_year\"]")
private WebElement creditcardexpyear;

@FindBy(xpath="//input[@id=\"cc_cvv\"]")
private WebElement cvvnumber;

@FindBy(xpath="//input[@id=\"book_now\"]")
private WebElement booknowbtn;

@FindBy(xpath="//input[@id=\"adults_room\"]")
private WebElement adultsroomselected;

@FindBy(xpath="//input[@id=\"children_room\"]")
private WebElement childrensperroomselected;


@FindBy(xpath="//input[@id=\"logout\"]")
private WebElement logoutbtn;

@FindBy(xpath="//td[contains(@class,\"reg_success\")]")
private WebElement logoutvalidate;



public WebElement getLogoutvalidate() {
	return logoutvalidate;
}
public WebElement getTotaldays() {
	return totaldays;
}
public WebElement getTotalpriceexcelGST() {
	return totalpriceexcelGST;
}

public WebElement getPricepernight() {
	return pricepernight;
}



public WebElement getUsername() {
	return username;
}

public WebElement getPassword() {
	return password;
}

public WebElement getLoginbtn() {
	return loginbtn;
}

public WebElement getSelectlocation() {
	return selectlocation;
}

public WebElement getSydney() {
	return sydney;
}

public WebElement getHotelsavailable() {
	return hotelsavailable;
}

public WebElement getHotelsunshine() {
	return Hotelsunshine;
}

public WebElement getRoomtype() {
	return Roomtype;
}

public WebElement getStandardroom() {
	return standardroom;
}

public WebElement getNumberofrooms() {
	return numberofrooms;
}

public WebElement getOneroom() {
	return Oneroom;
}

public WebElement getThreerooms() {
	return threerooms;
}

public WebElement getCheckindate() {
	return checkindate;
}

public WebElement getCheckoutdate() {
	return checkoutdate;
}

public WebElement getAdultsperroom() {
	return adultsperroom;
}

public WebElement getOneadultsinaroom() {
	return oneadultsinaroom;
}

public WebElement getChildrenperroom() {
	return childrenperroom;
}

public WebElement getOnechildreninaroom() {
	return onechildreninaroom;
}

public WebElement getCheckinandcheckoutvalidation() {
	return checkinandcheckoutvalidation;
}

public WebElement getSearchbutton() {
	return searchbutton;
}

public WebElement getSelectedlocation() {
	return selectedlocation;
}

public WebElement getSelectedhotelname() {
	return selectedhotelname;
}

public WebElement getArrivaldate() {
	return arrivaldate;
}

public WebElement getDeparturedate() {
	return departuredate;
}

public WebElement getNoofroomsselectedvalidate() {
	return noofroomsselectedvalidate;
}

public WebElement getRoomstypevalidate() {
	return roomstypevalidate;
}

public WebElement getRadiobutton() {
	return radiobutton;
}

public WebElement getContinuebutton() {
	return continuebutton;
}


public WebElement getOrdernumbergenerating() {
	return ordernumbergenerating;
}
public WebElement getOrdernumberinmyItinerarypage() {
	return ordernumberinmyItinerarypage;
}
public WebElement getCancelordernumberinmyItinerarypage() {
	return cancelordernumberinmyItinerarypage;
}
public WebElement getHotelnameinmyItinerarypage() {
	return hotelnameinmyItinerarypage;
}
public WebElement getHotellocationinmyItinerarypage() {
	return hotellocationinmyItinerarypage;
}
public WebElement getRoomsbookedinmyItinerarypage() {
	return roomsbookedinmyItinerarypage;
}
public WebElement getFirstnameinmyItinerarypage() {
	return firstnameinmyItinerarypage;
}
public WebElement getLastnameinmyItinerarypage() {
	return lastnameinmyItinerarypage;
}
public WebElement getCheckindateinmyItinerarypage() {
	return checkindateinmyItinerarypage;
}
public WebElement getCheckoutdateinmyItinerarypage() {
	return checkoutdateinmyItinerarypage;
}
public WebElement getNumberofdaysinmyItinerarypage() {
	return numberofdaysinmyItinerarypage;
}
public WebElement getRoomtypeinmyItinerarypage() {
	return roomtypeinmyItinerarypage;
}
public WebElement getPricepernightinmyItinerarypage() {
	return pricepernightinmyItinerarypage;
}
public WebElement getTotalpriceinclGSTinmyItinerarypage() {
	return totalpriceinclGSTinmyItinerarypage;
}




public WebElement getDatascannotbeeditable() {
	return datascannotbeeditable;
}
public WebElement getHotelnamevalidateeditableornot() {
	return hotelnamevalidateeditableornot;
}
public WebElement getMyitinerarybtn() {
	return myitinerarybtn;
}
public WebElement getOrdernumbervalidate() {
	return ordernumbervalidate;
}
public WebElement getRoomtypevalidatebookpage() {
	return roomtypevalidatebookpage;
}
public WebElement getLocationvalidateinbookpage() {
	return locationvalidateinbookpage;
}
public WebElement getHotelselectedinbookpage() {
	return hotelselectedinbookpage;
}
public WebElement getFinalBilledPrice() {
	return FinalBilledPrice;
}
public WebElement getFirstname() {
	return firstname;
}
public WebElement getLastname() {
	return lastname;
}
public WebElement getBillingaddress() {
	return billingaddress;
}
public WebElement getCreditcardno() {
	return creditcardno;
}
public WebElement getCreditcardtype() {
	return creditcardtype;
}
public WebElement getCreditcardexpmonth() {
	return creditcardexpmonth;
}
public WebElement getCreditcardexpyear() {
	return creditcardexpyear;
}
public WebElement getCvvnumber() {
	return cvvnumber;
}
public WebElement getBooknowbtn() {
	return booknowbtn;
}
public WebElement getAdultsroomselected() {
	return adultsroomselected;
}
public WebElement getChildrensperroomselected() {
	return childrensperroomselected;
}
public WebElement getLogoutbtn() {
	return logoutbtn;
}
}
