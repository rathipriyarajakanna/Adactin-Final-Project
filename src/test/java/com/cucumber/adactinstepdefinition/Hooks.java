package com.cucumber.adactinstepdefinition;

import java.io.File;

import com.cucumber.listener.Reporter;
import com.selenium.baseclass.BaseClass;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	@Before
	public static void beforeHook() {
System.out.println("Before Hook");
	}
	
	@After
	public static void afterHook(Scenario Scenario) throws Exception {

		System.out.println("After Hook");
		
		if (Scenario.isFailed()) {
			File takeScreenshotonthepage = BaseClass.takeScreenshotonthepage(Scenario.getName());
			Reporter.addScreenCaptureFromPath(takeScreenshotonthepage.getAbsolutePath());
			
		}
	}
	
	
}
