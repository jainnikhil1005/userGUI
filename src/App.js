import React, { Component, useState } from "react";
import { Dropdown, Option } from "./Dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import exportFromJSON from 'export-from-json';
import '@grapecity/spread-sheets-react';
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css";
import { ExcelExport } from '@progress/kendo-react-excel-export';
import {ExportCSV} from './ExportCSV';

export default function App(){

  const [market, setMarket] = useState();
  const [customer, setCustomer] = useState();
  const [country, setCountry] = useState();
  const [product, setProduct] = useState('');
  const [projDetails ,setProjDetails ] = useState('');
  const [oppID ,setOppID ] = useState('');
  const [oppRiskL ,setOppRiskL ] = useState('');
  const [aceID ,setAceID ] = useState('');
  const [strManager ,setStrManager ] = useState('');
  const [jiraCreated ,setJiraCreated ] = useState('');
  const [jiraDate ,setJiraDate ] = useState('');
  const [jiraType ,setJiraType ] = useState('');
  const [jiraID ,setJiraID ] = useState('');
  const [status ,setStatus ] = useState('');
  const [requester ,setRequester ] = useState('');
  const [dtm ,setDtm ] = useState('');
  const [fte ,setFte ] = useState('');
  const [projectType ,setProjectType ] = useState('');
  const [targetStart ,setTargetStart ] = useState('');
  const [targetEnd ,setTargetEnd ] = useState('');
  const [projStart ,setProjStartDate ] = useState('');
  const [projEnd ,setProjEndDate ] = useState('');
  const [daysWP ,setDaysWP ] = useState('');
  const [JIRA ,setJIRA ] = useState('');
  const [ontimeDelivery ,setOntimeDelivery ] = useState('');
  const [wbsCodes ,setWbsCodes ] = useState('');
  const [elapsedDays ,setElapsedDays ] = useState('');
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
    console.log(!checked);
  };
  const [jirachecked, setJiraChecked] = React.useState(true);
  const handleJira = () => {
    setJiraChecked(!jirachecked);
    console.log(!jirachecked);
  };
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [startTargetDate, setTargetStartDate] = useState(new Date());
  const [endTargetDate, setTargetEndDate] = useState(new Date());

  const [startDate1, setStartDate1] = useState(new Date());
  const [endDate1, setEndDate1] = useState(new Date());

  const [startDate2, setStartDate2] = useState(new Date());
  const [endDate2, setEndDate2] = useState(new Date());

  const [startDate3, setStartDate3] = useState(new Date());
  const [endDate3, setEndDate3] = useState(new Date());

  const finalProduct = [market,customer,country,product,projDetails,oppID,oppRiskL,aceID,strManager,jirachecked,endDate,jiraType,jiraID,status,requester,dtm,fte,projectType,endTargetDate,endDate1,endDate2,endDate3,daysWP,JIRA,checked,wbsCodes,elapsedDays];

  function displayFinalProduct(e){
    e.preventDefault();
    console.log(finalProduct);
    alert("Is this "+ finalProduct + " correct?")
  }

  const downloadTxtFile = () => {
    const excelData = JSON.stringify(finalProduct);
    const blob = new Blob([excelData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "user-info.json";
    link.href = url;
    link.click();
  }

  const data = [
    {market:market, 
    customer:customer, 
    country:country, 
    product:product, 
    "project details":projDetails, 
    "Opportunity ID" : oppID,
    "Opportunity Risk Level" : oppRiskL,
    "ACE Project ID" : aceID, 
    "Stream Manager" : strManager, 
    "JIRA Created" : jirachecked,
    "JIRA Created Date" : endDate,
    "Jira Type" : jiraType,
    "JIRA ID" : jiraID,
    "status" : status,
    "requester" : requester,
    "dtm" : dtm,
    "#fte" : fte,
    "projectType" : projectType,
    "Target Start" : endTargetDate,
    "Target End" : endDate1,
    "Project Start" : endDate2,
    "Project End" : endDate3,
    "Total Days of WP" : daysWP,
    "JIRA Closure Agreed" : JIRA,
    "Ontime Delivery" : checked,
    "WBS Codes" : wbsCodes,
    "Elapsed Days" : elapsedDays  
    }
  ]
    
  const handleCountry = event => {
    const result = event.target.value.replace(/[^a-z]/gi, '');
    setCountry(result);
  };
  const handleNumbers = event =>{
    const number = event.target.value.replace(/^[0-9\b]+$/, '');
    setElapsedDays(number);
  }

  return (
    <div  style={{backgroundColor: 124191}}>
      
      <h1>NOKIA</h1>

      <h1>User GUI</h1>
      <Dropdown
        formLabel="Choose a Market"
        
        // action= {console.log(market)}
        value={market}
        onChange={(e) => setMarket(e.target.value)}
      >
        <Option selected value="Click to see options" />
        <Option value="APJ" />
        <Option value="EUR" />
        <Option value="India" />
        <Option value="LAT" />
        <Option value="MEA" />
        <Option value="NAM" />
      </Dropdown>
      

      <br />
      <br />

       <label>Customer (Full Company Name) :</label>
         <input 
           id = "message"
           type="text" 
           required
           value={customer}
           onChange={(e) => setCustomer(e.target.value)}
          />
          

      <br />
      <br />

      <label>Country :</label>
         <input 
           type="text" 
           required 
           value={country}
           onChange={handleCountry}
          />
          
          
      <br />
      <br />

      <Dropdown
        formLabel="Choose a Product"
        //buttonText="Save"
        //onChange={handleSelect}
        action= {console.log()}
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      >
        <Option selected value="Click to see options" />
        <Option value="HDM" />
        <Option value="IMPACT" />
        <Option value="MDM" />
        <Option value="iSIM" />
      </Dropdown>

      <br />
      <br />

      <label>Project Details :</label>
         <input 
           type="text" 
           required 
           value={projDetails}
           onChange={(e) => setProjDetails(e.target.value)}
          />

      <br />
      <br />

      <label>Opportunity ID :</label>
         <input 
           type="numbers" 
           required 
           value={oppID}
           onChange={(e) => setOppID(e.target.value)}
          />

      <br />
      <br />

      <Dropdown
        formLabel="Opportunity Risk Level"
        //buttonText="Save"
        value={oppRiskL}
        onChange={(e) => setOppRiskL(e.target.value)}
        action= "https://www.google.com/"
      >
        <Option selected value="Click to see options" />
        <Option value="High" />
        <Option value="Medium" />
        <Option value="Low" />
        <Option value="NA" />
      </Dropdown>

      <br />
      <br />

      <label>ACE Project ID :</label>
         <input 
           type="text" 
           required 
           value={aceID}
           onChange={(e) => setAceID(e.target.value)}
          />
      <br />
      <br />

      <label>Stream Manager:</label>
         <input 
           type="text" 
           required 
           value={strManager}
           onChange={(e) => setStrManager(e.target.value)}
          />

      <br />
      <br />

      <label>
        Jira Created?
        <input
          type="checkbox"
          checked={jirachecked}
          value = {jiraCreated}
          onChange={handleJira}
        />
        
      </label>

      <br />
      <br />

      <label> Jira Created Date </label>
     <DatePicker
       //value = {jiraDate}
       selected={endDate}
       selectsEnd
       startDate={startDate}
       endDate={endDate}
       minDate={startDate}
       onChange={date => setEndDate(date)}
       
     />

      <br />
      <br />

      <Dropdown
        formLabel="Jira Type"
        //buttonText="Save"
        value={jiraType}
        onChange={(e) => setJiraType(e.target.value)}
        action= "https://www.google.com/"
      >
        <Option selected value="Click to see options" />
        <Option value="EPIC" />
        <Option value="User story" />
        <Option value="Story" />
      </Dropdown>

      <br />
      <br />

      <label>JIRA ID:</label>
         <input 
           type="text" 
           required 
           value={jiraID}
           onChange={(e) => setJiraID(e.target.value)}
          />

      <br />
      <br />

      <Dropdown
        formLabel="Status"
        //buttonText="Save"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        action= "https://www.google.com/"
      >
        <Option selected value="Click to see options" />
        <Option value="Completed" />
        <Option value="Ongoing" />
        <Option value="Pipeline" />
        <Option value="Hold" />
      </Dropdown>

      <label>Requester:</label>
         <input 
           type="text" 
           required 
           value={requester}
           onChange={(e) => setRequester(e.target.value)}
          />

      <br />
      <br />

      <label>DTM:</label>
         <input 
           type="text" 
           required 
           value={dtm}
           onChange={(e) => setDtm(e.target.value)}
          />

      <br />
      <br />

      <label>#FTE:</label>
         <input 
           type="text" 
           required 
           value={fte}
           onChange={(e) => setFte(e.target.value)}
          /> 

      <br />
      <br />

      <Dropdown
        formLabel="Project Type"
        //buttonText="Save"
        value={projectType}
        onChange={(e) => setProjectType(e.target.value)}
        action= "https://www.google.com/"
      >
        <Option selected value="Click to see options" />
        <Option value="Project" />
        <Option value="Opportunity" />
        <Option value="PoC" />
        <Option value="Trial" />
        <Option value="Demo" />
      </Dropdown>

      <br />
      <br />

      <label> Target Start Date ?</label>
      <DatePicker
       //value = {targetStart}
       selected={startTargetDate}
       selectsStart
       startDate={startTargetDate}
       endDate={endTargetDate}
       onChange={date => setTargetStartDate(date)}
      
     />

      <br />
      <br />

     <label> Target End Date? </label>
     <DatePicker
      // value = {targetEnd}
       selected={endDate1}
       selectsEnd
       startDate={startDate1}
       endDate={endDate1}
       minDate={startDate1}
       onChange={date => setTargetEndDate(date)}
       
     />

      <br />
      <br />

      <label> Project Start Date ?</label>
      <DatePicker
       //value = {projStart}
       selected={startDate2}
       selectsStart
       startDate={startDate2}
       endDate={endDate2}
       onChange={date => setStartDate2(date)}
     />

      <br />
      <br />

     <label> Project End Date? </label>
     <DatePicker
       //value = {projEnd}
       selected={endDate3}
       selectsEnd
       startDate={startDate3}
       endDate={endDate3}
       minDate={startDate3}
       onChange={date => setEndDate3(date)}
     />

      <br />
      <br />


      <label>Ttoal days of WP:</label>
         <input 
           type="text" 
           required 
           value={daysWP}
           onChange={(e) => setDaysWP(e.target.value)}
          /> 

      <br />
      <br />

      <label>JIRA Closure Agreed:</label>
         <input 
           type="text" 
           required 
           value={JIRA}
           onChange={(e) => setJIRA(e.target.value)}
          /> 

      <br />
      <br />

      <label>
        On Time Delivery?
        <input
          type="checkbox"
          checked={checked}
          value = {ontimeDelivery}
          onChange={handleChange}
        />
        
      </label>

      <br />
      <br />

      <label>WBS Codes:</label>
         <input 
           type="text" 
           required 
           value={wbsCodes}
           onChange={(e) => setWbsCodes(e.target.value)}
          /> 

      <br />
      <br />

      <label>Elapsed Days:</label>
         <input 
           type="text" 
           required 
           value={elapsedDays}
           onChange={handleNumbers}
          /> 

      <br />
      <br />

      <button 
      text = "Review Submissions"
      onClick = {displayFinalProduct}
      style = {{top: 80,
        left: 80,
        width: 150,
        height: 50,}}> Review Submissions  </button>
        
      <br />
      <br />
      

      {/* <button 
      text = "submit"
      onClick = {downloadTxtFile}
      style = {{top: 80,
        left: 80,
        width: 150,
        height: 50,}}> Submit  </button> */}

      {/* <button 
      text = "Export to Excel"
      onClick = {<ExportCSV csvData={data} fileName={'user-info'} /> }
      style = {{top: 80,
        left: 80,
        width: 150,
        height: 50,}}> Export to Excel  </button> */}
        <ExportCSV csvData={data} fileName={'fileName'} />
    </div>
    
  );
}

  
  





