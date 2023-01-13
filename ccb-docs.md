![Church Community Builder API](http://s3.amazonaws.com/ccb_public/images/church_community_builder-api.png)Edited on Nov 9, 2021

# Introduction

This implementer's guide provides information about the Church Community Builder Application Programming Interface (API) Group services.\
This document will specify the necessary values for requests and responses to and from the API, and will provide sample code for accessing the API.

Access to the API is free for all church partners. However, you still need to have a login and password assigned from your software. All API services are protected by HTTP Basic Authentication. If your application cannot provide credentials through Basic Authentication, then it will not be able to communicate with the API.\
All service calls to the API require a parameter named *srv* that has the value of the service being called. All API services accept an optional parameter named *describe_api* with a value of 1. This will cause the service to return the values it accepts as parameters (parameters that must be sent via POST may not be listed). If you send in duplicate parameters, only the last one will be recognized.\
Additionally there is a service *api_status* which has no parameters and will return: the total number of allowed calls per day (daily_limit); the last date the api was called (last_run_date); and the total number of calls made on that date (counter). This service will not change the last run date or increment the counter.

## **_NEW_**  Rate Limiting Policy

In addition to the daily limit of API calls allotted to each church partner, on **Monday, August 20, 2018** Church Community Builder will implement a new per-minute rate limiting strategy that will restrict the number of times per minute an API user can access an individual API Service. All API Users belonging to a Church Partner will share this per-minute allotment.

Church Partners can use the HTTP Headers we provide in our response to API calls in order to meter their usage of our API and determine their rate limiting status per API Service. These response headers are already implemented and available for you to use so you can begin altering your clients to adhere to the new rate limits. You can see details about how to use these response headers, as well as additional information about this rate limiting policy, on our [API Rate Limiting Guide](http://designccb.s3.amazonaws.com/helpdesk/files/official_docs/API_Rate_Limiting_CCB.pdf).

## Accessing the Services

The API services can be accessed via the https (port 443) protocol. For the security of church partner data, Church Community Builder has chosen to encrypt all transmissions of data, instead of using the standard http (port 80) port.\
The address to be used for accessing the services is displayed in the API Admin section of the Church Community Builder software.

## Login & Password

Logins and passwords are created and assigned through the API Admin section within the Church Community Builder software. Logins are assigned access to each service individually so control can be kept on what services are available if, for instance, the service login is for an external web development company.\
This login and password is not the same as the API User Community account.

# The API User Community

The API User Community (AUC) exists to provide a community for people of varying technical skill levels and interests to come and learn, share, and help one another. A Church Community Builder associate will always be a part of this community to help guide, share direction, solicit input, lead discussions, and moderate the forums as necessary.\
To gain access to the user community, please create an account at:\
https://village.ccbchurch.com

Once you have created this account, you will be able to access the user community at:\
https://village.ccbchurch.com

User community resources include or will include discussion forums, additional API documentation, tutorials, sample code, sample projects, and custom solutions as contributed by other members of the community. If you have questions or need help, try asking the API User Community. Church Community Builder does not provide official support for API integration.

## Batches

The Church Community Builder Batch services allow you to have access to your transaction information.

### Batch Profile by ID

---

The Batch Profile by ID service allows you to pass in a batch ID and have the details of that batch returned to you.

#### Service Name

batch_profile_from_id

#### Required Parameters

| name | type    |
| ---- | ------- |
| id   | integer |

#### Optional Parameters

None

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=batch_profile_from_id&id=13"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
  <parameters>
    <argument value="batch_profile_from_id" name="srv"/>
    <argument value="13" name="id"/>
  </parameters>
  </request>
  <response>
  <batches count="1">
    <batch id="13">
    <campus id="6">ProfitStars</campus>
    <post_date>2012-10-31</post_date>
    <begin_date>2012-10-31</begin_date>
    <end_date>0000-00-00</end_date>
    <in_accounting_package>false</in_accounting_package>
    <status>Closed</status>
    <source>Online</source>
    <transactions>
      <transaction id="21" merchant_transaction_id="">
        <campus id="6">ProfitStars</campus>
        <individual id="7">Bob Tomato</individual>
        <date>2012-10-31</date>
        <grouping id="1">None</grouping>
        <payment_type>Check</payment_type>
        <check_number>004440</check_number>
        <transaction_details>
           <transaction_detail id="22">
            <coa id="5">Online Giving</coa>
            <amount>960</amount>
            <tax_deductible>true</tax_deductible>
            <note></note>
            <creator id="1">Larry Cucumber</creator>
            <modifier id="1">Larry Cucumber</modifier>
            <created>2012-10-31 07:57:40</created>
            <modified>2012-10-31 07:57:40</modified>
           </transaction_detail>
        </transaction_details>
        <creator id="1">Larry Cucumber</creator>
        <modifier id="1">Larry Cucumber</modifier>
        <created>2012-10-31 07:57:40</created>
        <modified>2012-10-31 07:57:40</modified>
        <merchant_name></merchant_name>
        <merchant_individual_id></merchant_individual_id>
      </transaction>
      ...
      <transaction id="22" merchant_transaction_id="">
        <campus id="6">ProfitStars</campus>
        <individual id="2">Mr. Lunt</individual>
        <date>2012-10-31</date>
        <grouping id="1">None</grouping>
        <payment_type>Check</payment_type>
        <check_number>000626</check_number>
        <transaction_details>
           <transaction_detail id="23">
            <coa id="5">Online Giving</coa>
            <amount>4797</amount>
            <tax_deductible>true</tax_deductible>
            <note></note>
            <creator id="1">Larry Cucumber</creator>
            <modifier id="1">Larry Cucumber</modifier>
            <created>2012-10-31 07:57:40</created>
            <modified>2012-10-31 07:57:40</modified>
           </transaction_detail>
        </transaction_details>
        <creator id="1">Larry Cucumber</creator>
        <modifier id="1">Larry Cucumber</modifier>
        <created>2012-10-31 07:57:40</created>
        <modified>2012-10-31 07:57:40</modified>
        <merchant_name></merchant_name>
        <merchant_individual_id></merchant_individual_id>
      </transaction>
    </transactions>
    <creator id="1">Larry Cucumber</creator>
    <modifier id="1">Larry Cucumber</modifier>
    <created>2012-10-31 07:57:40</created>
    <modified>2012-10-31 07:57:40</modified>
    </batch>
  </batches>
  </response>
</ccb_api>
```

### Batch Profiles

---

The Batch Profiles service allows you to pass in a given date and have all batches created or modified since that date returned to you. If a date is not provided, all batches in the system will be returned.

#### Service Name

batch_profiles

#### Required Parameters

None

#### Optional Parameters

| name           | type     |
| -------------- | -------- |
| modified_since | datetime |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=batch_profiles&modified_since=2010-05-18"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="batch_profiles" name="srv"/>
      <argument value="2010-05-18" name="modified_since"/>
    </parameters>
  </request>
  <response>
    <service>batch_profiles</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <batches count="10">
      <batch id="3">
        <campus id="1">Church of Cucumbers</campus>
        <post_date>2011-07-10</post_date>
        <begin_date>2011-07-12</begin_date>
        <end_date>0000-00-00</end_date>
        <in_accounting_package>false</in_accounting_package>
        <status>Open</status>
        <source>Manual Entry</source>
        <transactions>
            <transaction id="11" merchant_transaction_id="">
              <campus id="1">Church of Cucumbers</campus>
              <individual id="2">Mr. Larry</individual>
              <date>2011-07-10</date>
              <grouping id="1">None</grouping>
              <payment_type>Check</payment_type>
              <check_number>20</check_number>
              <transaction_details>
                <transaction_detail id="12">
                  <coa id="1">General Fund - TD</coa>
                  <amount>123</amount>
                  <tax_deductible>true</tax_deductible>
                  <note></note>
                  <creator id="5">Full Financial</creator>
                  <modifier id="5">Full Financial</modifier>
                  <created>2011-07-12 15:13:59</created>
                  <modified>2011-07-12 15:13:59</modified>
                </transaction_detail>
              </transaction_details>
              <creator id="5">Full Financial</creator>
              <modifier id="5">Full Financial</modifier>
              <created>2011-07-12 15:12:12</created>
              <modified>2011-07-12 15:13:59</modified>
              <merchant_name></merchant_name>
              <merchant_individual_id></merchant_individual_id>
            </transaction>
        </transactions>
        <creator id="5">Full Financial</creator>
        <modifier id="5">Full Financial</modifier>
        <created>2011-07-12 15:11:42</created>
        <modified>2011-07-12 15:12:00</modified>
      </batch>
       ...
      <batch id="13">
        <campus id="6">ProfitStars</campus>
        <post_date>2012-10-31</post_date>
        <begin_date>2012-10-31</begin_date>
        <end_date>0000-00-00</end_date>
        <in_accounting_package>false</in_accounting_package>
        <status>Closed</status>
        <source>Online</source>
        <transactions>
          <transaction id="21" merchant_transaction_id="">
            <campus id="6">ProfitStars</campus>
            <individual id="7">Bob Tomato</individual>
            <date>2012-10-31</date>
            <grouping id="1">None</grouping>
            <payment_type>Check</payment_type>
            <check_number>004440</check_number>
            <transaction_details>
              <transaction_detail id="22">
                <coa id="5">Online Giving</coa>
                <amount>960</amount>
                <tax_deductible>true</tax_deductible>
                <note></note>
                <creator id="1">Larry Cucumber</creator>
                <modifier id="1">Larry Cucumber</modifier>
                <created>2012-10-31 07:57:40</created>
                <modified>2012-10-31 07:57:40</modified>
              </transaction_detail>
            </transaction_details>
            <creator id="1">Larry Cucumber</creator>
            <modifier id="1">Larry Cucumber</modifier>
            <created>2012-10-31 07:57:40</created>
            <modified>2012-10-31 07:57:40</modified>
            <merchant_name></merchant_name>
            <merchant_individual_id></merchant_individual_id>
          </transaction>
          ...
          <transaction id="22" merchant_transaction_id="">
            <campus id="6">ProfitStars</campus>
            <individual id="2">Mr. Lunt</individual>
            <date>2012-10-31</date>
            <grouping id="1">None</grouping>
            <payment_type>Check</payment_type>
            <check_number>000626</check_number>
            <transaction_details>
              <transaction_detail id="23">
                <coa id="5">Online Giving</coa>
                <amount>4797</amount>
                <tax_deductible>true</tax_deductible>
                <note></note>
                <creator id="1">Larry Cucumber</creator>
                <modifier id="1">Larry Cucumber</modifier>
                <created>2012-10-31 07:57:40</created>
                <modified>2012-10-31 07:57:40</modified>
              </transaction_detail>
            </transaction_details>
            <creator id="1">Larry Cucumber</creator>
            <modifier id="1">Larry Cucumber</modifier>
            <created>2012-10-31 07:57:40</created>
            <modified>2012-10-31 07:57:40</modified>
            <merchant_name></merchant_name>
            <merchant_individual_id></merchant_individual_id>
          </transaction>
        </transactions>
        <creator id="1">Larry Cucumber</creator>
        <modifier id="1">Larry Cucumber</modifier>
        <created>2012-10-31 07:57:40</created>
        <modified>2012-10-31 07:57:40</modified>
      </batch>
    </batches>
  </response>
</ccb_api>
```

### Batch Profiles in Date Range

---

The Batch Profiles in Date Range service allows you to pass in a given start date and optional end date and will return all batches with a post date in that date range. If the end date is not provided, only batches posted on the start date will be returned.

#### Service Name

batch_profiles_in_date_range

#### Required Parameters

| name       | type     |
| ---------- | -------- |
| date_start | datetime |

#### Optional Parameters

| name     | type     |
| -------- | -------- |
| date_end | datetime |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=batch_profiles_in_date_range&date_start=2010-05-19"
```

#### Example XML

See [Batch Profiles](https://designccb.s3.amazonaws.com/helpdesk/files/official_docs/api.html#batch_profiles)

### Import Batches

---

The Import Batches service allows you to directly create batches with full transaction information in the Church Community Builder database. In order to import the batches, an XML file with the designated structure must be sent with the service call.

#### Service Name

import_batches

All of the following parameters must be sent as a part of the input XML file.

#### Parameters for Batch

| name         | type       | notes                                |
| ------------ | ---------- | ------------------------------------ |
| name         | string[50] | *optional* will be appended with API |
| campus_id    | int        |
| post_date    | date       | if not valid will be set to today    |
| transactions | see below  |

#### Parameters for Transaction

| name                    | type       | notes                                        |
| ----------------------- | ---------- | -------------------------------------------- |
| merchant_transaction_id | string[75] | optional                                     |
| individual id           | int        | if not valid the entire import will stop     |
| date                    | date       | if not valid will be set to post_date        |
| grouping id             | int        | optional                                     |
| payment_type            | string     | Must be either cash, check, online, or other |
| check_number            | int        | optional                                     |
| merchant_name           | string[50] | optional                                     |
| merchant_individual_id  | string[75] | optional                                     |
| transaction_details     | see below  |

#### Parameters for Transaction Details (Split Payments)

| name                  | type                                            |
| --------------------- | ----------------------------------------------- |
| transaction_detail id | int                                             |
| coa id                | int                                             |
| amount                | float                                           |
| tax_deductible        | **Deprecated this will be set by COA category** |
| note                  | string[90]                                      |

#### Example Curl

```
  curl -u user:password -F filedata=@your_local_file_location "http://your_test_site/api.php?srv=import_batches"
```

#### Example Input XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
     <batch id="19">
          <campus id="1"></campus>
          <post_date>2013-11-12</post_date>
          <transactions>
               <transaction id="44" merchant_transaction_id="abc-123">
                    <individual id="48"></individual>
                    <date>2006-05-04</date>
                    <grouping id="1"></grouping>
                    <payment_type>Cash</payment_type>
                    <check_number></check_number>
                    <merchant_name></merchant_name>
                    <merchant_individual_id></merchant_individual_id>
                    <transaction_details>
                         <transaction_detail id="44">
                              <coa id="1"></coa>
                              <amount>250.32</amount>
                              <note>note0</note>
                         </transaction_detail>
                         <transaction_detail id="45">
                              <coa id="2"></coa>
                              <amount>10.35</amount>
                              <note></note>
                         </transaction_detail>
                    </transaction_details>
               </transaction>
               <transaction id="45">
                    <campus id="2"></campus>
                    <individual id="50"></individual>
                    <date>2006-05-04</date>
                    <grouping id=""></grouping>
                    <payment_type>Check</payment_type>
                    <check_number>1234</check_number>
                    <merchant_name></merchant_name>
                    <merchant_individual_id></merchant_individual_id>
                    <transaction_details>
                         <transaction_detail id="46">
                              <coa id="2"></coa>
                              <amount>10</amount>
                              <note></note>
                         </transaction_detail>
                    </transaction_details>
               </transaction>
          </transactions>
     </batch>
</ccb_api>
```

#### Example Output XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
     <request>
          <parameters>
               <argument value="import_batches" name="srv"/>
          </parameters>
     </request>
     <response>
          <service>import_batches</service>
          <service_action>execute</service_action>
          <availability>public</availability>
          <batches count="1">
               <batch id="1410">
                    <campus id="1">User Experience Campus</campus>
                    <post_date>2013-11-12</post_date>
                    <begin_date>2016-03-04</begin_date>
                    <end_date>2016-03-04</end_date>
                    <in_accounting_package>false</in_accounting_package>
                    <status>Closed</status>
                    <source>Created through API</source>
                    <transactions>
                         <transaction id="2815">
                              <campus id="1">User Experience Campus</campus>
                              <individual id="48">Amy Arnold</individual>
                              <date>2006-05-04</date>
                              <grouping id="1">3rd</grouping>
                              <payment_type>Cash</payment_type>
                              <check_number></check_number>
                              <transaction_details>
                                   <transaction_detail id="3271">
                                        <coa id="1">Other</coa>
                                        <amount>250.32</amount>
                                        <tax_deductible>true</tax_deductible>
                                        <note>note0</note>
                                        <creator id="0">System User</creator>
                                        <modifier id="0">System User</modifier>
                                        <created>2016-03-04 01:25:04</created>
                                        <modified>2016-03-04 01:25:04</modified>
                                   </transaction_detail>
                                   <transaction_detail id="3272">
                                        <coa id="2">Benevolence</coa>
                                        <amount>10.35</amount>
                                        <tax_deductible>true</tax_deductible>
                                        <note></note>
                                        <creator id="0">System User</creator>
                                        <modifier id="0">System User</modifier>
                                        <created>2016-03-04 01:25:04</created>
                                        <modified>2016-03-04 01:25:04</modified>
                                   </transaction_detail>
                              </transaction_details>
                              <creator id="0">System User</creator>
                              <modifier id="0">System User</modifier>
                              <created>2016-03-04 01:25:04</created>
                              <modified>2016-03-04 01:25:04</modified>
                         </transaction>
                         <transaction id="2816">
                              <campus id="1">User Experience Campus</campus>
                              <individual id="50">Noell Arrington</individual>
                              <date>2006-05-04</date>
                              <grouping id=""></grouping>
                              <payment_type>Check</payment_type>
                              <check_number>1234</check_number>
                              <transaction_details>
                                   <transaction_detail id="3273">
                                        <coa id="2">Benevolence</coa>
                                        <amount>10</amount>
                                        <tax_deductible>true</tax_deductible>
                                        <note></note>
                                        <creator id="0">System User</creator>
                                        <modifier id="0">System User</modifier>
                                        <created>2016-03-04 01:25:04</created>
                                        <modified>2016-03-04 01:25:04</modified>
                                   </transaction_detail>
                              </transaction_details>
                              <creator id="0">System User</creator>
                              <modifier id="0">System User</modifier>
                              <created>2016-03-04 01:25:04</created>
                              <modified>2016-03-04 01:25:04</modified>
                         </transaction>
                    </transactions>
                    <creator id="0">System User</creator>
                    <modifier id="0">System User</modifier>
                    <created>2016-03-04 01:25:04</created>
                    <modified>2016-03-04 01:25:04</modified>
               </batch>
          </batches>
     </response>
</ccb_api>
```

### Transaction Detail

---

#### Service Name

transaction_detail_type_detail

#### Required Parameters

| name                       | type    |
| -------------------------- | ------- |
| transaction_detail_type_id | integer |

#### Optional Parameters

None

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=transaction_detail_type_detail&transaction_detail_type_id=1"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="transaction_detail_type_detail" name="srv"/>
      <argument value="1" name="transaction_detail_type_id"/>
    </parameters>
  </request>
  <response>
    <service>transaction_detail_type_detail</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <transaction_detail_types count="1">
      <transaction_detail_type id="1">
        <name>General Fund - TD</name>
        <order_by>1</order_by>
        <owner id="1">
          <first_name>Larry</first_name>
          <last_name>Cucumber</last_name>
          <full_name>Larry Cucumber</full_name>
          <email>test@test.com</email>
          <phones>
            <phone type="mobile">0123456789</phone>
          </phones>
        </owner>
        <editable>1</editable>
        <listed>1</listed>
        <creator id="1">Larry Cucumber</creator>
        <modifier id="1">Larry Cucumber</modifier>
        <created>2001-12-06 22:20:46</created>
        <modified>2013-08-05 10:40:53</modified>
      </transaction_detail_type>
    </transaction_detail_types>
  </response>
</ccb_api>
```

### COA Listing (Formerly called Transaction List)

---

#### Service Name

transaction_detail_type_list

#### Required Parameters

None

#### Optional Parameters

None

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=transaction_detail_type_list"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="transaction_detail_type_list" name="srv"/>
    </parameters>
  </request>
  <response>
     <service>transaction_detail_type_list</service>
     <service_action>execute</service_action>
     <availability>public</availability>
     <transaction_detail_types count="5">
        <transaction_detail_type id="1">
          <name>General Fund - TD</name>
          <cash_bank_account></cash_bank_account>
          <account_number></account_number>
          <tax_deductible>true</tax_deductible>
          <online_giving_enabled>true</online_giving_enabled>
          <pledge_goal>0</pledge_goal>
          <parent id=""></parent>
          <campuses>
            <campus id="1">Church of Cucumbers</campus>
          </campuses>
        </transaction_detail_type>
        ...
        <transaction_detail_type id="5">
          <name>Online Giving</name>
          <cash_bank_account></cash_bank_account>
          <account_number></account_number>
          <tax_deductible>true</tax_deductible>
          <online_giving_enabled>true</online_giving_enabled>
          <pledge_goal>0</pledge_goal>
          <parent id=""></parent>
          <campuses>
            <campus id="1">Church of Cucumbers</campus>
            <campus id="2">CC - Southside</campus>
            <campus id="6">ProfitStars</campus>
            <campus id="7">BluePay</campus>
            <campus id="8">Authorize.net</campus>
            <campus id="9">Eastern</campus>
            <campus id="10">Central</campus>
            <campus id="11">Pacific</campus>
            <campus id="12">Mountain</campus>
          </campuses>
        </transaction_detail_type>
     </transaction_detail_types>
  </response>
</ccb_api>
```

### Transactions by Family

---

#### Service Name

transactions_by_family

#### Required Parameters

| name      | type    |
| --------- | ------- |
| family_id | integer |

#### Optional Parameters

| name           | type     |
| -------------- | -------- |
| date_start     | datetime |
| date_end       | datetime |
| modified_since | datetime |

#### Example Curl

```
curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=transactions_by_family&family_id=2809&modified_since=2012-12-17&date_end=2013-01-01"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
     <request>
          <parameters>
               <argument value="transactions_by_family" name="srv"/>
               <argument value="2809" name="family_id"/>
               <argument value="2012-12-17" name="modified_since"/>
               <argument value="2013-01-01" name="date_end"/>
          </parameters>
     </request>
     <response>
          <service>transactions_by_family</service>
          <service_action>execute</service_action>
          <availability>public</availability>
          <transactions count="3">
               <transaction id="3067" merchant_transaction_id="">
                    <campus id="1">Our Church</campus>
                    <individual id="1">Billy A</individual>
                    <date>2012-12-06</date>
                    <grouping id="2">1st Saturday Service</grouping>
                    <payment_type>Online</payment_type>
                    <check_number></check_number>
                    <transaction_details>
                         <transaction_detail id="3516">
                              <coa id="46">General</coa>
                              <amount>1</amount>
                              <tax_deductible>true</tax_deductible>
                              <note></note>
                              <creator id="1">Billy A</creator>
                              <modifier id="1">Billy A</modifier>
                              <created>2012-12-17 08:43:59</created>
                              <modified>2012-12-17 08:43:59</modified>
                         </transaction_detail>
                    </transaction_details>
                    <creator id="1">Billy A</creator>
                    <modifier id="1">Billy A</modifier>
                    <created>2012-12-17 08:43:59</created>
                    <modified>2012-12-17 08:43:59</modified>
                    <merchant_name></merchant_name>
                    <merchant_individual_id></merchant_individual_id>
               </transaction>
               ...
               <transaction id="3069" merchant_transaction_id="">
                    <campus id="1">Our Church</campus>
                    <individual id="2">Bobby A</individual>
                    <date>2012-12-07</date>
                    <grouping id="2">1st Saturday Service</grouping>
                    <payment_type>Online</payment_type>
                    <check_number></check_number>
                    <transaction_details>
                         <transaction_detail id="3518">
                              <coa id="5">012345678901234567890123456789</coa>
                              <amount>1</amount>
                              <tax_deductible>true</tax_deductible>
                              <note></note>
                              <creator id="1">Bobby A</creator>
                              <modifier id="1">Bobby A</modifier>
                              <created>2012-12-17 08:44:24</created>
                              <modified>2012-12-17 08:44:24</modified>
                         </transaction_detail>
                    </transaction_details>
                    <creator id="1">Bobby A</creator>
                    <modifier id="1">Bobby A</modifier>
                    <created>2012-12-17 08:44:24</created>
                    <modified>2012-12-17 08:44:24</modified>
                    <merchant_name></merchant_name>
                    <merchant_individual_id></merchant_individual_id>
               </transaction>
          </transactions>
     </response>
</ccb_api>
```

## Event Services

The Church Community Builder Event services allow you to have access to your membership information. This information can be used as you wish on your website or in other applications in use across your church.

### Add Individual to Event

---

The Add Individual to Event service allows an RSVP for an individual to be created. The individual can be listed as Invited, Attending, Declined, Undecided, or Requesting To Attend.

#### Service Name

add_individual_to_event

#### Required Parameters

| name     | type    | notes                                                                        |
| -------- | ------- | ---------------------------------------------------------------------------- |
| id       | integer |
| event_id | integer |
| status   | string  | Must be one of the following: 'add'; 'invite'; 'decline'; 'maybe'; 'request' |

#### Optional Parameters

None

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=add_individual_to_event&id=48&event_id=7&status=undecided"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="add_individual_to_event" name="srv"/>
      <argument value="48" name="id"/>
      <argument value="7" name="event_id"/>
      <argument value="undecided" name="status"/>
    </parameters>
  </request>
  <response>
    <service>add_individual_to_event</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <individual_events count="1">
      <individual_event>
        <individual id="48"/>
        <event id="7"/>
        <status>Requesting to attend</status>
      </individual_event>
    </individual_events>
  </response>
</ccb_api>
```

### Attendance Profile

---

The Attendance Profile service allows you to retrieve attendance information for a provided occurrence of an event.

#### Service Name

attendance_profile

#### Required Parameters

| name       | type     |
| ---------- | -------- |
| id         | integer  |
| occurrence | datetime |

#### Optional Parameters

None

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=attendance_profile&id=756&occurrence=2014-01-27"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="attendance_profile" name="srv"/>
      <argument value="756" name="id"/>
      <argument value="2014-01-27" name="occurrence"/>
    </parameters>
  </request>
  <response>
    <events count="1">
      <event id="756">
        <name>Every. day. part 2</name>
        <occurrence>2014-01-27 00:00:00</occurrence>
        <did_not_meet>false</did_not_meet>
        <topic></topic>
        <notes></notes>
        <prayer_requests></prayer_requests>
        <info></info>
        <attendees>
          <attendee id="10">
            <first_name>Ben</first_name>
            <last_name>Bolton</last_name>
          </attendee>
          <attendee id="25">
            <first_name>Ben</first_name>
            <last_name>Boltontest</last_name>
          </attendee>
        </attendees>
        <head_count></head_count>
      </event>
    </events>
  </response>
</ccb_api>
```

### Attendance Profiles

---

Similar to the attendance_profile service only this returns data from a date range.

#### Service Name

attendance_profiles

#### Required Parameters

| name       | type     |
| ---------- | -------- |
| start_date | datetime |
| end_date   | datetime |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=attendance_profiles&start_date=2015-01-01&end_date=2015-02-01"
```

#### Example XML

see attendance_profile

### Create Event

---

The Create Event service will accept form-encoded data representing a new event and create a new event in the Church Community Builder system. The service returns the profile of the event that was created.

#### Service Name

create_event

#### Required Parameters

| name       | type     | notes                          |
| ---------- | -------- | ------------------------------ |
| group_id   | integer  | **Must be sent via HTTP POST** |
| start_date | datetime | **Must be sent via HTTP POST** |
| end_date   | datetime | **Must be sent via HTTP POST** |
| name       | string   | **Must be sent via HTTP POST** |

#### Optional Parameters

| name                    | type     | notes                                                                                                        |
| ----------------------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| description             | string   | **Must be sent via HTTP POST**                                                                               |
| leader_notes            | string   | **Must be sent via HTTP POST**                                                                               |
| setup_minutes           | integer  | **Must be sent via HTTP POST**                                                                               |
| cleanup_minutes         | integer  | **Must be sent via HTTP POST**                                                                               |
| setup_notes             | string   | **Must be sent via HTTP POST**                                                                               |
| organizer_id            | integer  | **Must be sent via HTTP POST**                                                                               |
| contact_phone           | string   | **Must be sent via HTTP POST**                                                                               |
| event_type_id           | integer  | **Must be sent via HTTP POST**                                                                               |
| registration_form_id    | integer  | **Must be sent via HTTP POST**                                                                               |
| event_grouping_id       | integer  | **Must be sent via HTTP POST**                                                                               |
| registration_limit      | integer  | **Must be sent via HTTP POST**                                                                               |
| recurrence_type         | string   | **Must be sent via HTTP POST** Must be one of the following: 'daily'; 'weekly'; 'monthly'                    |
| recurrence_frequency    | integer  | **Must be sent via HTTP POST** Must be greater than zero                                                     |
| recurrence_week_number  | string   | **Must be sent via HTTP POST** Must be one of the following: 'first'; 'second'; 'third'; 'fourth'; 'last'    |
| recurrence_day_of_week  | string   | **Must be sent via HTTP POST** Must be one of the following: 'mon'; 'tue'; 'wed'; 'thu'; 'fri'; 'sat'; 'sun' |
| recurrence_day_of_month | integer  | **Must be sent via HTTP POST** Must be between 0 and 31.                                                     |
| recurrence_end_date     | datetime | **Must be sent via HTTP POST**                                                                               |
| number_of_occurrences   | integer  | **Must be sent via HTTP POST**                                                                               |
| location_name           | integer  | **Must be sent via HTTP POST**                                                                               |
| location_street_address | integer  | **Must be sent via HTTP POST**                                                                               |
| location_city           | integer  | **Must be sent via HTTP POST**                                                                               |
| location_state          | string   | **Must be sent via HTTP POST** Must be two or three uppercase characters                                     |
| location_zip            | integer  | **Must be sent via HTTP POST**                                                                               |
| notification            | boolean  | **Must be sent via HTTP POST**                                                                               |
| attendance_reminder     | boolean  | **Must be sent via HTTP POST**                                                                               |
| uses_resources          | boolean  | **Must be sent via HTTP POST**                                                                               |
| use_campus_address      | boolean  | **Must be sent via HTTP POST**                                                                               |
| listed                  | boolean  | **Must be sent via HTTP POST**                                                                               |
| creator_id              | integer  | **Must be sent via HTTP POST**                                                                               |

#### Example Curl

```
  curl -u user:pass -d "name=Test+Event+via+API&start_date=2012-09-27+09:00:00&end_date=2012-09-27+11:30:00&group_id=1&recurrence_type=monthly&recurrence_week_number=second&recurrence_day_of_week=tue" "https://yourchurch.ccbchurch.com/api.php?srv=create_event"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="create_event" name="srv"/>
    </parameters>
  </request>
  <response>
    <service>create_event</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <event id="12">
      <name>Test Event via API</name>
      <description></description>
      <leader_notes></leader_notes>
      <start_datetime>2012-09-27 09:00:00</start_datetime>
      <start_date>Sep 27, 2012</start_date>
      <start_time>9:00 AM</start_time>
      <end_datetime>2012-09-27 11:30:00</end_datetime>
      <end_date>Sep 27, 2012</end_date>
      <end_time>11:30 AM</end_time>
      <timezone>America/Denver</timezone>
      <recurrence_description>Every month on the second Tuesday of the month from 9:00 AM to 11:30 AM</recurrence_description>
      <exceptions/>
      <group id="1">Entire Church Group</group>
      <organizer id="1">Larry Cucumber</organizer>
      <phone type="mobile"></phone>
      <location/>
      <registration>
        <limit>0</limit>
        <event_type id="1">Open to All</event_type>
        <forms/>
      </registration>
      <resources/>
      <setup>
        <start>2012-09-27 09:00:00</start>
        <end>2012-09-27 11:30:00</end>
        <notes></notes>
      </setup>
      <event_grouping id=""></event_grouping>
      <creator id="0">System User</creator>
      <modifier id="0">System User</modifier>
      <created>2014-01-28 14:17:50</created>
      <modified>2014-01-28 14:17:50</modified>
    </event>
  </response>
</ccb_api>
```

### Create Event Attendance

---

The Create Event Attendance service allows you to directly create attendance records in the Church Community Builder database. In order to create the attendance records, an XML file with the designated structure must be sent with the service call.

#### Service Name

create_event_attendance

#### Required Parameters

```
<?xml version="1.0" encoding="UTF-8"?>
<events>
	<event id="1453" occurrence="2012-07-29 08:00:00">
		<did_not_meet>false</did_not_meet>
		<head_count>12</head_count>
		<attendees>
			<attendee id="3056"></attendee>
			<attendee id="3057"></attendee>
		</attendees>
		<topic>Walk with God</topic>
		<notes>These are notes we took</notes>
		<prayer_requests>Prayer requests: Jacob - Ask God's guidance as he learns new topics in college</prayer_requests>
		<info>Jamie was sick</info>
		<email_notification>none</email_notification>
	</event>
</events>
```

#### Optional Parameters

none

#### Example Curl

```
  curl -u user:pass -F filedata=@"/Users/jsmith/create_attendance.xml" "https://yourchurch.ccbchurch.com/api.php?srv=create_event_attendance"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?> <ccb_api>
<request> <parameters>
<argument name="srv" value="create_event_attendance" />
<argument name="format" value="xml" /> </parameters>
</request> <response>
<service>create_event_attendance</service> <service_action>execute</service_action> <availability>public</availability> <events count="1">
<event id="1456">
<name>Test Event via API part II</name> <occurrence>2012-08-26 08:00:00</occurrence> <did_not_meet>false</did_not_meet>
<topic>Walk with God Chapter 2</topic> <notes>None</notes>
<prayer_requests>Back to school</prayer_requests> <info>Amy and Jancie brought friends.</info> <attendees>
<attendee id="2412"> <first_name>Ken</first_name> <last_name>Scott</last_name>
</attendee> <attendee id="2463">
<first_name>Leslie</first_name>
<last_name>Scott</last_name> </attendee>
<attendee id="2464">
<first_name>Kaitlyn</first_name>
<last_name>Scott</last_name> </attendee>
<?xml version="1.0" encoding="UTF-8"?> <ccb_api>
<request> <parameters>
<argument name="srv" value="create_event_attendance" />
<argument name="format" value="xml" /> </parameters>
</request> <response>
<service>create_event_attendance</service> <service_action>execute</service_action> <availability>public</availability> <events count="1">
<event id="1456">
<name>Test Event via API part II</name> <occurrence>2012-08-26 08:00:00</occurrence> <did_not_meet>false</did_not_meet>
<topic>Walk with God Chapter 2</topic> <notes>None</notes>
<prayer_requests>Back to school</prayer_requests> <info>Amy and Jancie brought friends.</info> <attendees>
<attendee id="2412"> <first_name>Ken</first_name> <last_name>Scott</last_name>
</attendee> <attendee id="2463">
<first_name>Leslie</first_name>
<last_name>Scott</last_name> </attendee>
<attendee id="2464">
<first_name>Kaitlyn</first_name>
<last_name>Scott</last_name> </attendee>
```

### Event Profile

---

The Event Profile service allows you to retrieve the profile for an event identified by its ID.

#### Service Name

event_profile

#### Required Parameters

| name | type    |
| ---- | ------- |
| id   | integer |

#### Optional Parameters

| name               | type    | notes             |
| ------------------ | ------- | ----------------- |
| include_guest_list | boolean | defaults to false |
| include_image_link | boolean | defaults to false |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=event_profile&id=7"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="event_profile" name="srv"/>
      <argument value="7" name="id"/>
    </parameters>
  </request>
  <response>
    <service>event_profile</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <events count="1">
      <event id="7">
        <name>**Pizza Night**</name>
        <description>Eating pizza all night!</description>
        <leader_notes></leader_notes>
        <start_datetime>2012-09-21 19:00:00</start_datetime>
        <start_date>Sep 21, 2012</start_date>
        <start_time>7:00 PM</start_time>
        <end_datetime>2012-09-21 21:00:00</end_datetime>
        <end_date>Sep 21, 2012</end_date>
        <end_time>9:00 PM</end_time>
        <timezone>America/Denver</timezone>
        <recurrence_description>Every week on Friday from 7:00 PM to 9:00 PM</recurrence_description>
        <exceptions/>
        <group id="23">**Ninja Turtle Club**</group>
        <organizer id="36">Event Organizer</organizer>
        <phone type="contact"></phone>
        <location/>
        <registration>
          <limit>0</limit>
          <event_type id="1">Open to All</event_type>
          <forms/>
        </registration>
        <guest_list/>
        <resources/>
        <setup>
          <start>2012-09-21 19:00:00</start>
          <end>2012-09-21 21:00:00</end>
          <notes></notes>
        </setup>
        <event_grouping id=""></event_grouping>
        <creator id="1">Larry Cucumber</creator>
        <modifier id="1">Larry Cucumber</modifier>
        <created>2012-09-20 08:57:06</created>
        <modified>2012-09-25 15:47:17</modified>
      </event>
    </events>
  </response>
</ccb_api>
```

### Event Profiles

---

The Event Profiles service allows you to pass in a given date and have all events created or modified since that date returned to you. If a date is not provided, all events in the system will be returned.

#### Service Name

event_profiles

#### Required Parameters

None

#### Optional Parameters

| name               | type     |
| ------------------ | -------- | ------------------------------------- |
| modified_since     | datetime |
| page               | int      | if per_page is set this defaults to 1 |
| per_page           | int      | if page is set this defaults to 25    |
| include_guest_list | boolean  | defaults to false                     |
| include_image_link | boolean  | defaults to false                     |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=event_profiles&modified_since=2010-04-01"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="event_profiles" name="srv"/>
      <argument value="2010-04-01" name="modified_since"/>
    </parameters>
  </request>
  <response>
    <service>event_profiles</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <events count="11">
      <event id="1">
        <name>1st Sunday Service</name>
        <description></description>
        <leader_notes></leader_notes>
        <start_datetime>2011-05-01 09:00:00</start_datetime>
        <start_date>May 1, 2011</start_date>
        <start_time>9:00 AM</start_time>
        <end_datetime>2011-05-01 10:45:00</end_datetime>
        <end_date>May 1, 2011</end_date>
        <end_time>10:45 AM</end_time>
        <timezone>America/Denver</timezone>
        <recurrence_description>Every week on Sunday from 9:00 AM to 10:45 AM</recurrence_description>
        <exceptions/>
        <group id="1">Entire Church Group</group>
        <organizer id="1">Larry Cucumber</organizer>
        <phone type="contact"></phone>
        <location/>
        <registration>
          <limit>0</limit>
          <event_type id="1">Open to All</event_type>
          <forms/>
        </registration>
        <guest_list/>
        <resources/>
        <setup>
          <start>2011-05-01 09:00:00</start>
          <end>2011-05-01 10:45:00</end>
          <notes></notes>
        </setup>
        <event_grouping id="1">Sunday Service's</event_grouping>
        <creator id="1">Larry Cucumber</creator>
        <modifier id="1">Larry Cucumber</modifier>
        <created>2011-05-06 16:19:06</created>
        <modified>2011-12-13 08:38:25</modified>
      </event>
      ...
      <event id="11">
        <name>Sunday School</name>
        <description>Sunday School</description>
        <leader_notes></leader_notes>
        <start_datetime>2014-01-08 09:00:00</start_datetime>
        <start_date>Jan 8, 2014</start_date>
        <start_time>9:00 AM</start_time>
        <end_datetime>2014-01-08 10:00:00</end_datetime>
        <end_date>Jan 8, 2014</end_date>
        <end_time>10:00 AM</end_time>
        <timezone>America/Denver</timezone>
        <recurrence_description>Jan 8, 2014 at 9:00 AM</recurrence_description>
        <exceptions/>
        <group id="1">Entire Church Group</group>
        <organizer id="1">Larry Cucumber</organizer>
        <phone type="contact"></phone>
        <location/>
        <registration>
          <limit>0</limit>
          <event_type id="1">Open to All</event_type>
          <forms/>
        </registration>
        <guest_list/>
        <resources/>
        <setup>
          <start>2014-01-08 09:00:00</start>
          <end>2014-01-08 10:00:00</end>
          <notes></notes>
        </setup>
        <event_grouping id="1">Sunday Service's</event_grouping>
        <creator id="1">Larry Cucumber</creator>
        <modifier id="1">Larry Cucumber</modifier>
        <created>2014-01-08 08:18:10</created>
        <modified>2014-01-08 08:18:10</modified>
      </event>
    </events>
  </response>
</ccb_api>
```

### Resource List

---

The Resource List provides basic information about a room or resource.

#### Service Name

resource_list

#### Required Parameters

None

#### Optional Parameters

| name           | type     |
| -------------- | -------- | ------------------------------------- |
| modified_since | datetime |
| page           | int      | if per_page is set this defaults to 1 |
| per_page       | int      | if page is set this defaults to 25    |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=resource_list&modified_since=2014-10-01&per_page=201"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
   <request>
      <parameters>
         <argument value="resource_list" name="srv"/>
         <argument value="2014-10-01" name="modified_since"/>
         <argument value="2" name="per_page"/>
      </parameters>
   </request>
   <response>
      <service>resource_list</service>
      <service_action>execute</service_action>
      <availability>public</availability>
      <resources count="2">
         <resource id="34" type="room">
          <name>60 &quot;Round Table&quot; Tables</name>
          <campus id="1">User Experience Campus</campus>
          <owner id="269">Karl Kay</owner>
          <description>A lot of tables</description>
          <notes></notes>
          <fee_amount>$0.00</fee_amount>
          <quantity>1</quantity>
          <allow_layout>false</allow_layout>
          <allow_conflicts>false</allow_conflicts>
          <notification>true</notification>
          <listed>true</listed>
          <creator id="269">Karl Kay</creator>
          <modifier id="269">Karl Kay</modifier>
          <date_created>2012-02-03 16:27:06</date_created>
          <date_modified>2014-05-14 09:48:56</date_modified>
         </resource>
         <resource id="35" type="resource">
          <name>Really tall ladder</name>
          <campus id="1">User Experience Campus</campus>
          <owner id="207">Amy Carter</owner>
          <description></description>
          <notes>30 ft tall</notes>
          <fee_amount>$0.00</fee_amount>
          <quantity>1</quantity>
          <allow_layout>true</allow_layout>
          <allow_conflicts>false</allow_conflicts>
          <notification>false</notification>
          <listed>true</listed>
          <creator id="207">Amy Carter</creator>
          <modifier id="207">Amy Carter</modifier>
          <date_created>2012-01-31 15:55:21</date_created>
          <date_modified>2014-02-07 11:37:00</date_modified>
         </resource>
      </resources>
   </response>
</ccb_api>
```

## Form Services

The Church Community Builder Form Services allows you to have access to your form information. This information can be used as you wish on your website, or in other applications in use across your church.\
Access to the Form Services is free for the asking for all church partners. However, you still need to have a login and password assigned from your Church Community Builder software. All API services are protected by HTTP Basic Authentication. If your application cannot provide credentials through Basic Authentication, then it will not be able to communicate with the API.\
All service calls to the API require a parameter named 'srv' that contains the name of the service being called. All API services accept an optional parameter named 'describe_api' with a value of '1'. This will cause the service to return the values it accepts as parameters and the format of the service response.

### Form Detail

---

The Form Detail service returns all of the questions and answer options associated with a form including payment options and discount codes.

#### Service Name

form_detail

#### Required Parameters

| name | type    |
| ---- | ------- |
| id   | integer |

#### Optional Parameters

none

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=form_detail&id=1"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
   <request>
      <parameters>
         <argument value="form_detail" name="srv"/>
         <argument value="1" name="id"/>
      </parameters>
   </request>
   <response>
      <service>form_detail</service>
      <service_action>execute</service_action>
      <availability>public</availability>
      <forms count="1">
         <form id="1">
          <title>&quot;20 Somethings&quot; Spring Retreat</title>
          <description>This year's exciting retreat will be nestled in the mountains in Buena Vista at the Niles Retreat Center. Cost is $100 per person and covers all lodging, food and activities. </description>
          <campus id="1">User Experience Campus</campus>
          <confirmationText>confirmation text box</confirmationText>
          <showConfirmationCode>1</showConfirmationCode>
          <start>2/15/2005</start>
          <end></end>
          <status>Unpublished</status>
          <public>true</public>
          <published>false</published>
          <disabled>true</disabled>
          <hasDiscountCodes>false</hasDiscountCodes>
          <creator id="1" value="Master Administrator"></creator>
          <modifier id="1" value="Master Administrator"></modifier>
          <created>2005-02-16 02:07:01</created>
          <modified>2013-07-18 17:46:51</modified>
          <profile id="1">
             <title>Profile</title>
             <explanation></explanation>
             <fields>
                <field id="3">
                   <name>mobile_phone</name>
                   <required>true</required>
                </field>
                <field id="4">
                   <name>email</name>
                   <required>true</required>
                </field>
                <field id="1">
                   <name>first_name</name>
                   <required>true</required>
                </field>
                <field id="2">
                   <name>last_name</name>
                   <required>true</required>
                </field>
                <field id="5">
                   <name>mobile_phone</name>
                   <required>false</required>
                </field>
             </fields>
          </profile>
          <questions>
             <question id="378">
                <title>Profile Notes</title>
                <explanation></explanation>
                <required>false</required>
                <questionType>Paragraph Text</questionType>
                <order>0</order>
                <adminOnly>false</adminOnly>
                <allowOneChoiceOnly>false</allowOneChoiceOnly>
                <disabled>false</disabled>
                <min>0</min>
                <max>0</max>
                <choices></choices>
                <options></options>
             </question>
             <question id="1">
                <title>Preferred Food Type</title>
                <explanation></explanation>
                <required>false</required>
                <questionType>Product/Ticket</questionType>
                <order>1</order>
                <adminOnly>false</adminOnly>
                <allowOneChoiceOnly>false</allowOneChoiceOnly>
                <disabled>true</disabled>
                <min>0</min>
                <max>0</max>
                <choices>
                  <choice id="1">
                    <name>Meat Lover</name>
                    <order>1</order>
                    <disabled>true</disabled>
                    <coa></coa>
                    <price>5</price>
                    <min>0</min>
                    <max>0</max>
                    <totalAvailable>0</totalAvailable>
                   </choice>
                   <choice id="2">
                    <name>Vegetarian</name>
                    <order>2</order>
                    <disabled>true</disabled>
                    <coa></coa>
                    <price>10</price>
                    <min>0</min>
                    <max>0</max>
                    <totalAvailable>0</totalAvailable>
                   </choice>
                   <choice id="3">
                    <name>I'll Eat Anything</name>
                    <order>3</order>
                    <disabled>false</disabled>
                    <coa></coa>
                    <price>0</price>
                    <min>0</min>
                    <max>0</max>
                    <totalAvailable>0</totalAvailable>
                   </choice>
                </choices>
                <options></options>
             </question>
             <question id="182">
                <title>don't touch dogs</title>
                <explanation></explanation>
                <required>true</required>
                <questionType>Single Line Text</questionType>
                <order>2</order>
                <adminOnly>false</adminOnly>
                <allowOneChoiceOnly>false</allowOneChoiceOnly>
                <disabled>false</disabled>
                <min>0</min>
                <max>0</max>
                <choices></choices>
                <options></options>
             </question>
             <question id="328">
                <title>Tickets</title>
                <explanation></explanation>
                <required>true</required>
                <questionType>Product/Ticket</questionType>
                <order>2</order>
                <adminOnly>false</adminOnly>
                <allowOneChoiceOnly>false</allowOneChoiceOnly>
                <disabled>true</disabled>
                <min>0</min>
                <max>0</max>
                <choices>
                  <choice id="641">
                    <name>Ticket</name>
                    <order>0</order>
                    <disabled>true</disabled>
                    <coa></coa>
                    <price>68.75</price>
                    <min>1</min>
                    <max>4</max>
                    <totalAvailable>0</totalAvailable>
                   </choice>
                </choices>
                <options></options>
             </question>
             <question id="181">
                <title>This option is no longer available</title>
                <explanation></explanation>
                <required>true</required>
                <questionType>Product/Ticket</questionType>
                <order>3</order>
                <adminOnly>false</adminOnly>
                <allowOneChoiceOnly>false</allowOneChoiceOnly>
                <disabled>true</disabled>
                <min>0</min>
                <max>0</max>
                <choices>
                  <choice id="283">
                    <name>do not use</name>
                    <order>0</order>
                    <disabled>false</disabled>
                    <coa></coa>
                    <price>0</price>
                    <min>0</min>
                    <max>0</max>
                    <totalAvailable>0</totalAvailable>
                   </choice>
                   <choice id="479">
                    <name>do not use</name>
                    <order>1</order>
                    <disabled>true</disabled>
                    <coa></coa>
                    <price>10</price>
                    <min>0</min>
                    <max>0</max>
                    <totalAvailable>0</totalAvailable>
                   </choice>
                   <choice id="480">
                    <name>maybe</name>
                    <order>2</order>
                    <disabled>true</disabled>
                    <coa></coa>
                    <price>20</price>
                    <min>0</min>
                    <max>0</max>
                    <totalAvailable>0</totalAvailable>
                   </choice>
                </choices>
                <options></options>
             </question>
          </questions>
          <attachments></attachments>
          <discountCodes></discountCodes>
          <paymentOptions>
             <paymentOption id="later" value="Pay Later"></paymentOption>
             <paymentOption id="cc" value="Pay Now by Credit/Bank Card"></paymentOption>
          </paymentOptions>
         </form>
      </forms>
   </response>
</ccb_api>
```

### Form List

---

The Form List service returns a listing of all forms defined in the Church Community Builder system, along with the web addresses to access them.

#### Service Name

form_list

#### Required Parameters

none

#### Optional Parameters

| name             | type       |
| ---------------- | ---------- |
| form_id          | integer    |
| campus_id        | integer    |
| modified_since   | string[20] |
| include_archived | boolean    |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=form_list&form_id=1"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="form_list" name="srv"/>
      <argument value="1" name="form_id"/>
    </parameters>
  </request>
  <response>
    <service>form_list</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <items count="3">
      <form id="1">
      <title>Erin's Form</title>
      <description></description>
      <campus id="1">User's Experience Campus</campus>
      <managers>
        <manager id="1">Larry Boy</manager>
        <manager id="2424">Basic User</manager>
        <manager id="2421">Limited Financial</manager>
      </managers>
      <start>2013-08-15</start>
      <end></end>
      <public>false</public>
      <published>true</published>
      <status>Available</status>
      <creator id="1">Larry Boy</creator>
      <modifier id="1">Larry Boy</modifier>
      <created>2013-02-14 14:10:25</created>
      <modified>2013-08-15 16:28:02</modified>
      <url>https://yourchurch.ccbchurch.com/form_response.php?id=1</url>
      </form>
    </items>
  </response>
</ccb_api>
```

### Form Responses

---

The Form Responses service returns a listing of all responses filtered down by parameters. Although there are no required parameters it is highly recommended to use the optional parameters due to timeout issues.

#### Service Name

form_responses

#### Required Parameters

none

#### Optional Parameters

| name           | type     |
| -------------- | -------- | ------------------------------------- |
| form_id        | integer  |
| individual_id  | integer  |
| modified_since | datetime |
| page           | int      | if per_page is set this defaults to 1 |
| per_page       | int      | if page is set this defaults to 25    |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=form_responses&form_id=267"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
ccb_api>
   <request>
      <parameters>
         <argument value="form_responses" name="srv"/>
         <argument value="267" name="form_id"/>
      </parameters>
   </request>
   <response>
      <service>form_responses</service>
      <service_action>execute</service_action>
      <availability>public</availability>
      <form_responses count="2">
         <form_response id="1049">
          <form id="267"/>
          <individual id="2413">Larry Boy</individual>
          <amount_due>$9.60</amount_due>
          <confirmation_code>53358774</confirmation_code>
          <creator id="0">System User</creator>
          <modifier id="2413">Larry Boy</modifier>
          <created>2014-10-15 07:50:15</created>
          <modified>2014-10-15 07:50:16</modified>
          <profile_fields>
             <profile_info id="914" name="birthday">3/31/1976</profile_info>
             <profile_info id="909" name="email_primary">person@churchcommunitybuilder.com</profile_info>
             <profile_info id="915" name="gender">f</profile_info>
             <profile_info id="908" name="mailing_city">Colorado Springs</profile_info>
             <profile_info id="908" name="mailing_state">CO</profile_info>
             <profile_info id="908" name="mailing_street">3319 Queen Anne Way</profile_info>
             <profile_info id="908" name="mailing_zip">00501</profile_info>
             <profile_info id="916" name="marital_status">m</profile_info>
             <profile_info id="906" name="name_first">Larry</profile_info>
             <profile_info id="907" name="name_last">Boy</profile_info>
             <profile_info id="912" name="phone_home">(555) 339-1234</profile_info>
             <profile_info id="911" name="phone_mobile">(555) 123-4523</profile_info>
             <profile_info id="913" name="phone_work">(555) 266-1234</profile_info>
          </profile_fields>
          <answers>
             <title>File Upload</title>
             <answer_value>438</answer_value>
             <choice id="0"></choice>
             <option id="0"></option>
             <title>Paragraph Text</title>
             <answer_value>A longer answer that can go for more than a single line of text. Here is the answer to this particular question.</answer_value>
             <choice id="0"></choice>
             <option id="0"></option>
             <title>Single Line Text</title>
             <answer_value>A single line of text</answer_value>
             <choice id="0"></choice>
             <option id="0"></option>
             <title>Checkboxes</title>
             <answer_value></answer_value>
             <choice id="1014">Yes</choice>
             <option id="0"></option>
             <title>Pulldown Menu</title>
             <answer_value></answer_value>
             <choice id="1018">No</choice>
             <option id="0"></option>
             <title>Radio Buttons</title>
             <answer_value></answer_value>
             <choice id="1022">I don't know</choice>
             <option id="0"></option>
             <title>Scale</title>
             <answer_value></answer_value>
             <choice id="1023">The ocean</choice>
             <option id="1029">Good</option>
             <title>Scale</title>
             <answer_value></answer_value>
             <choice id="1024">The mountains</choice>
             <option id="1028">Fair</option>
             <title>Scale</title>
             <answer_value></answer_value>
             <choice id="1025">The desert</choice>
             <option id="1027">Poor</option>
             <title>Prioritize</title>
             <answer_value>3</answer_value>
             <choice id="1032">Option 2</choice>
             <option id="0"></option>
             <title>Prioritize</title>
             <answer_value>1</answer_value>
             <choice id="1034">Option 4</choice>
             <option id="0"></option>
             <title>Prioritize</title>
             <answer_value>2</answer_value>
             <choice id="1033">Option 3</choice>
             <option id="0"></option>
             <title>Number</title>
             <answer_value>4</answer_value>
             <choice id="0"></choice>
             <option id="0"></option>
             <title>Date</title>
             <answer_value>10/25/2014</answer_value>
             <choice id="0"></choice>
             <option id="0"></option>
             <title>Product/Ticket</title>
             <answer_value>3</answer_value>
             <choice id="1036">Item 1</choice>
             <option id="0"></option>
             <title>Product/Ticket</title>
             <answer_value>2</answer_value>
             <choice id="1037">Item 2</choice>
             <option id="0"></option>
             <title>Donation Amount</title>
             <answer_value>5</answer_value>
             <choice id="1039">General</choice>
             <option id="0"></option>
          </answers>
          <payment_info id="1049">
             <payer id="2413">Larry Boy</payer>
             <transaction_id>0</transaction_id>
             <first_name>Larry</first_name>
             <last_name>Boy</last_name>
             <street_address>123 Main Way</street_address>
             <city>Colorado Springs</city>
             <state>CO</state>
             <postal_code>00501</postal_code>
             <email>someone@churchcommunitybuilder.com</email>
             <phone>+15556469982</phone>
             <discount_code>
                <code>PERCENTOFF</code>
                <discount_type>percentage</discount_type>
                <discount>20</discount>
             </discount_code>
             <amount>$9.60</amount>
             <status>Unpaid</status>
             <creator id="2413">Larry Boy</creator>
             <modifier id="2413">Larry Boy</modifier>
             <created>2014-10-15 07:50:15</created>
             <modified>2014-10-15 07:50:16</modified>
             <payment_method/>
             <payment_details>
                <payment_details id="2831">
                   <amount>$3.00</amount>
                   <coa id="46" tax_deductible="true">General
                   </coa>
                </payment_details>
                <payment_details id="2832">
                   <amount>$2.00</amount>
                   <coa id="31" tax_deductible="false">Retreat Scolarships
                   </coa>
                </payment_details>
                <payment_details id="2833">
                   <amount>$5.00</amount>
                   <coa id="46" tax_deductible="true">General
                   </coa>
                </payment_details>
                <payment_details id="2834">
                   <amount>($0.40)</amount>
                   <coa id="31" tax_deductible="false">Retreat Scolarships
                   </coa>
                </payment_details>
             </payment_details>
             <merchant_info/>
          </payment_info>
         </form_response>
         <form_response id="1050">
          <form id="267"/>
          <amount_due>$2.00</amount_due>
          <confirmation_code>94430141</confirmation_code>
          <creator id="0">System User</creator>
          <modifier id="2413">Larry Boy</modifier>
          <created>2014-10-15 09:27:40</created>
          <modified>2014-10-15 09:34:13</modified>
          <profile_fields>
             <profile_info id="914" name="birthday">9/30/1965</profile_info>
             <profile_info id="909" name="email_primary">larry@test.com</profile_info>
             <profile_info id="915" name="gender">f</profile_info>
             <profile_info id="908" name="mailing_city">Colorado Springs</profile_info>
             <profile_info id="908" name="mailing_state">CO</profile_info>
             <profile_info id="908" name="mailing_street">2325 Main Dr</profile_info>
             <profile_info id="908" name="mailing_zip">80911</profile_info>
             <profile_info id="916" name="marital_status">m</profile_info>
             <profile_info id="906" name="name_first">Bob</profile_info>
             <profile_info id="907" name="name_last">Fletcher</profile_info>
             <profile_info id="912" name="phone_home">(555) 345-6789</profile_info>
             <profile_info id="911" name="phone_mobile">(555) 345-6789</profile_info>
             <profile_info id="913" name="phone_work">(555) 345-6789</profile_info>
          </profile_fields>
          <answers>
             <title>File Upload</title>
             <answer_value>439</answer_value>
             <choice id="0"></choice>
             <option id="0"></option>
             <title>Single Line Text</title>
             <answer_value>okay</answer_value>
             <choice id="0"></choice>
             <option id="0"></option>
             <title>Paragraph Text</title>
             <answer_value>okay</answer_value>
             <choice id="0"></choice>
             <option id="0"></option>
             <title>Checkboxes</title>
             <answer_value></answer_value>
             <choice id="1016">I don't know</choice>
             <option id="0"></option>
             <title>Pulldown Menu</title>
             <answer_value></answer_value>
             <choice id="1019">I don't know</choice>
             <option id="0"></option>
             <title>Radio Buttons</title>
             <answer_value></answer_value>
             <choice id="1022">I don't know</choice>
             <option id="0"></option>
             <title>Scale</title>
             <answer_value></answer_value>
             <choice id="1024">The mountains</choice>
             <option id="1029">Good</option>
             <title>Scale</title>
             <answer_value></answer_value>
             <choice id="1025">The desert</choice>
             <option id="1029">Good</option>
             <title>Scale</title>
             <answer_value></answer_value>
             <choice id="1023">The ocean</choice>
             <option id="1029">Good</option>
             <title>Prioritize</title>
             <answer_value>1</answer_value>
             <choice id="1032">Option 2</choice>
             <option id="0"></option>
             <title>Number</title>
             <answer_value>3</answer_value>
             <choice id="0"></choice>
             <option id="0"></option>
             <title>Date</title>
             <answer_value>10/18/2014</answer_value>
             <choice id="0"></choice>
             <option id="0"></option>
             <title>Product/Ticket</title>
             <answer_value>1</answer_value>
             <choice id="1036">Item 1</choice>
             <option id="0"></option>
             <title>Donation Amount</title>
             <answer_value>1</answer_value>
             <choice id="1041">Retreat Scolarships</choice>
             <option id="0"></option>
          </answers>
          <payment_info id="1050">
             <payer id="3374">Bob Fletcher</payer>
             <transaction_id>0</transaction_id>
             <first_name>Bob</first_name>
             <last_name>Fletcher</last_name>
             <street_address>2325 Main Dr</street_address>
             <city>Colorado Springs</city>
             <state>CO</state>
             <postal_code>80911</postal_code>
             <email>bob@test.com</email>
             <phone>5553456789</phone>
             <discount_code/>
             <amount>$2.00</amount>
             <status>Unpaid</status>
             <creator id="0">System User</creator>
             <modifier id="2413">Larry Boy</modifier>
             <created>2014-10-15 09:27:40</created>
             <modified>2014-10-15 09:34:13</modified>
             <payment_method/>
             <payment_details>
                <payment_details id="2835">
                   <amount>$1.00</amount>
                   <coa id="46" tax_deductible="true">General
                   </coa>
                </payment_details>
                <payment_details id="2836">
                   <amount>$1.00</amount>
                   <coa id="31" tax_deductible="false">Retreat Scolarships
                   </coa>
                </payment_details>
             </payment_details>
             <merchant_info/>
          </payment_info>
         </form_response>
      </form_responses>
   </response>
</ccb_api>
```

## Group Services

The Church Community Builder Group services allow you to have access to your membership information. This information can be used as you wish on your website, or in other applications in use across your church.

The Group Services frequently reference 'group members' and 'group participants'. The difference between the two is the individual's status in the group. 'Group members' only refers to people who are listed as members; it doesn't include, for instance, group leaders, assistant leaders, or people still requesting to join. 'Group participants', on the other hand, refers to all people who are connected to the group, regardless of their status within it --- leader, member, requesting, etc.

### Add Individual to Group

---

The Add Individual to Group service allows an individual to be added to an existing group. The individual can be added as a Group Member, Invited, or Requesting To Join.

#### Service Name

add_individual_to_group

#### Required Parameters

| name     | type    | notes                                                    |
| -------- | ------- | -------------------------------------------------------- |
| id       | integer |
| group_id | integer |
| status   | string  | Must be one of the following: 'add'; 'invite'; 'request' |

#### Optional Parameters

None

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=add_individual_to_group&id=48&group_id=23&status=requesting"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="add_individual_to_group" name="srv"/>
      <argument value="48" name="id"/>
      <argument value="23" name="group_id"/>
      <argument value="requesting" name="status"/>
    </parameters>
  </request>
  <response>
    <service>add_individual_to_group</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <groups count="1">
      <group id="23">
        <name>**Ninja Turtle Club**</name>
        <description>Fight by night</description>
        <image>https://s3.amazonaws.com/ccbchurch/40622/pics/g_23?AWSAccessKeyId=AKIAJ4CISARDRJPE4ERQ&amp;Expires=1390930031&amp;  Signature=zK2Kh4Goya2s3eBb6cxF2lNtzKU%3D</image>
        <campus id="1">Church of Cucumbers</campus>
        <main_leader id="49">
          <first_name>Group</first_name>
          <last_name>Leader</last_name>
          <full_name>Group Leader</full_name>
          <email>tsebastian@churchcommunitybuilder.com</email>
          <phones>
            <phone type="mobile"></phone>
          </phones>
        </main_leader>
        <leaders>
          <leader id="34">
            <first_name>Assistant</first_name>
            <last_name>Group Leader</last_name>
            <full_name>Assistant Group Leader</full_name>
            <email>tsebastian@ccbhq.com</email>
            <phones>
              <phone type="mobile"></phone>
            </phones>
          </leader>
        </leaders>
        <participants/>
        <group_type id="1">Care / Small Group</group_type>
        <department id="0"></department>
        <area id="0"></area>
        <calendar_feed>webcal://yourchurch.ccbchurch.com/group_calendar.ics?id=23&amp;tk=9AABQK9DBD4ZUK426MSM6QZSKDJKS2U9</calendar_feed>
        <registration_forms/>
        <current_members>9</current_members>
        <group_capacity>Unlimited</group_capacity>
        <addresses/>
        <meeting_day id="0"></meeting_day>
        <meeting_time id="0"></meeting_time>
        <childcare_provided>false</childcare_provided>
        <interaction_type>Members Interact</interaction_type>
        <membership_type>Invitation or Request Required</membership_type>
        <notification>false</notification>
        <user_defined_fields/>
        <listed>true</listed>
        <public_search_listed>false</public_search_listed>
        <inactive>false</inactive>
        <creator id="1">Larry Cucumber</creator>
        <modifier id="1">Larry Cucumber</modifier>
        <created>2012-09-20 08:51:01</created>
        <modified>2012-10-05 16:34:47</modified>
      </group>
    </groups>
  </response>
</ccb_api>
```

### Add Individual to Queue

---

The Add Individual to Queue service will add a specific individual to a queue. If the individual is already in the queue, this service will add them again. If you include the optional parameter manager_id and it is a valid id, a queue notification will be sent to that individual's email address.

#### Service Name

add_individual_to_queue

#### Required Parameters

| name          | type |
| ------------- | ---- |
| individual_id | int  |
| queue_id      | int  |

#### Optional Parameters

| name           | type   |
| -------------- | ------ |
| manager_id     | int    |
| note           | string |
| suppress_email | int    |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=add_individual_to_queue&individual_id=48&queue_id=18"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="add_individual_to_queue" name="srv"/>
      <argument value="48" name="individual_id"/>
      <argument value="18" name="queue_id"/>
    </parameters>
  </request>
  <response>
    <individuals count="1">
      <individual id="48">
        <name>Larry</name>
        <manager id="0"></manager>
        <status>Not-Started</status>
        <entered>2014-01-28 10:25:42</entered>
        <due>2014-01-29</due>
        <completed></completed>
        <creator id="0">System User</creator>
        <modifier id="0">System User</modifier>
        <created>2014-01-28 10:25:42</created>
      </individual>
    </individuals>
  </response>
</ccb_api>
```

### Create Group

---

The Create Group service will accept form-encoded data representing a new group and will create a new group in the Church Community Builder system. The service returns the profile of the group that was created.

When a group is created via the api leaders can edit, book resources, give logins, edit participants, upload docs, and access family reports. Leaders can not publish events to church calendar. These settings can currently only be modified using the application.

A group can not have:\

-   interaction type of administrative and membership type of open to all\
-   interaction type of administrative and listed set to true\
-   interaction type of administrative and public search listed set to true\
-   membership type of open to all and listed set to false

When this service is called with interaction type of administrative the default value for listed.

#### Service Name

create_group

#### Required Parameters

| name           | type       | notes                                               |
| -------------- | ---------- | --------------------------------------------------- |
| name           | string[50] |
| campus_id      | integer    |
| main_leader_id | integer    | Leader can not be a limited access user or inactive |

#### Optional Parameters

| name                                 | type         | notes                                                                                                                  |
| ------------------------------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------- |
| description                          | string       |
| group_type_id                        | integer      |
| department_id                        | integer      |
| area_id                              | integer      |
| group_capacity                       | integer      |
| meeting_location_street_address[150] | string       |
| meeting_location_city                | string[50]   |
| meeting_location_state               | string[1--5] | Must be uppercase characters                                                                                           |
| meeting_location_zip                 | string[10]   |
| meeting_day_id                       | integer      |
| meeting_time_id                      | integer      |
| childcare_provided                   | boolean      | default false                                                                                                          |
| interaction_type                     | string       | default 'Announcement Only' Must be one of the following: 'Announcement Only'; 'Members Interact'; 'Administrative'    |
| membership_type                      | string       | default 'Invitation or Request Required' Must be one of the following: 'Open to All'; 'Invitation or Request Required' |
| listed                               | boolean      | default true                                                                                                           |
| public_search_listed                 | boolean      | default false                                                                                                          |
| udf_group_pulldown_1_id              | integer      |
| udf_group_pulldown_2_id              | integer      |
| udf_group_pulldown_3_id              | integer      |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=create_group&campus_id=1&name=ApiTestGroup&main_leader_id=1"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="create_group" name="srv"/>
    </parameters>
  </request>
  <response>
    <service>create_group</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <groups count="1">
      <group id="41">
        <name>New group created via API</name>
        <description>None</description>
        <image>https://cdn3.ccbchurch.com/preSTABLE/images/group-default.gif</image>
        <campus id="1">Church of Cucumbers</campus>
        <main_leader id="1">
          <first_name>Larry</first_name>
          <last_name>Cucumber</last_name>
          <full_name>Larry Cucumber</full_name>
          <email>test@test.com</email>
          <phones>
            <phone type="mobile">(012) 345-6789</phone>
          </phones>
        </main_leader>
        <leaders/>
        <participants/>
        <group_type id="1">Care / Small Group</group_type>
        <department id="0"></department>
        <area id="0"></area>
        <calendar_feed>webcal://testing_stable.ccbchurch.com/group_calendar.ics?id=41&amp;tk=VVNY5RHV2V5PBJP3AFCRBR54PA2C7FHM</calendar_feed>
        <registration_forms/>
        <current_members>1</current_members>
        <group_capacity>Unlimited</group_capacity>
        <addresses/>
        <meeting_day id="0"></meeting_day>
        <meeting_time id="0"></meeting_time>
        <childcare_provided>false</childcare_provided>
        <interaction_type>Members Interact</interaction_type>
        <membership_type>Invitation or Request Required</membership_type>
        <notification>false</notification>
        <user_defined_fields/>
        <listed>true</listed>
        <public_search_listed>false</public_search_listed>
        <inactive>false</inactive>
        <creator id="0">System User</creator>
        <modifier id="0">System User</modifier>
        <created>2014-01-28 10:25:57</created>
        <modified>2014-01-28 10:25:57</modified>
      </group>
    </groups>
  </response>
</ccb_api>
```

### Group Needs

---

The Group Needs service allows you to pass in a group ID and have the list of needs associated with that group be returned.

#### Service Name

group_needs

#### Required Parameters

| name | type    |
| ---- | ------- |
| id   | integer |

#### Optional Parameters

None

#### Example Curl

curl -u apiuser:password1 -d "" "https://yourchurch.ccbchurch.com/api.php?srv=group_needs&id=23"

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="group_needs" name="srv"/>
      <argument value="23" name="id"/>
    </parameters>
  </request>
  <groups count="1">
    <group id="23">
      <name>**Ninja Turtle Club**</name>
      <needs count="1">
        <need id="6">
          <name>Pizza</name>
          <coordinator id="38">Needs Coordinator</coordinator>
          <description>We need pizza. Calibunga dude!!!!</description>
          <creator id="1">Larry Cucumber</creator>
          <modifier id="1">Larry Cucumber</modifier>
          <created>2012-09-20 08:51:42</created>
          <modified>2012-09-20 08:52:56</modified>
          <current_items count="0"/>
          <past_items count="1">
            <past_item>
              <past_item id="1">past_item</past_item>
              <name>Unnamed Item</name>
              <date>2012-09-21</date>
              <assigned_to>Not Assigned</assigned_to>
              <creator>Larry Cucumber</creator>
              <modifier>Larry Cucumber</modifier>
              <created>2012-09-20 08:51:42</created>
              <modified>2012-09-20 08:52:56</modified>
            </past_item>
          </past_items>
        </need>
      </needs>
    </group>
  </groups>
</ccb_api>
```

### Group Participants

---

The Group Participants service allows you to pass in a group ID and have the list of members associated with that group returned.

#### Service Name

group_participants

#### Required Parameters

| name | type    |
| ---- | ------- |
| id   | integer |

#### Optional Parameters

| name             | type     |
| ---------------- | -------- |
| include_inactive | boolean  |
| modified_since   | datetime |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=group_participants&id=23"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="group_participants" name="srv"/>
      <argument value="23" name="id"/>
    </parameters>
  </request>
  <response>
    <service>group_participants</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <groups count="1">
      <group id="23" name="**Ninja Turtle Club**">
        <participants count="10">
          <participant id="1">
            <name>Larry Cucumber</name>
            <email>test@test.com</email>
            <mobile_phone></mobile_phone>
            <carrier id="0"></carrier>
            <receive_email_from_church>true</receive_email_from_church>
            <receive_email_from_group>true</receive_email_from_group>
            <receive_sms_from_group>false</receive_sms_from_group>
            <status id="2">Member</status>
            <date_joined>2012-09-20 08:51:01</date_joined>
            <active>true</active>
            <creator id="1">Larry Cucumber</creator>
            <modifier id="1">Larry Cucumber</modifier>
            <created>2012-09-20 08:51:01</created>
            <modified>2012-09-25 15:46:15</modified>
          </participant>
          ...
          <participant id="61">
            <name>Bob Tom</name>
            <email></email>
            <mobile_phone></mobile_phone>
            <carrier id="0"></carrier>
            <receive_email_from_church>true</receive_email_from_church>
            <receive_email_from_group>true</receive_email_from_group>
            <receive_sms_from_group>false</receive_sms_from_group>
            <status id="2">Member</status>
            <date_joined>2013-04-08 06:51:45</date_joined>
            <active>true</active>
            <creator id="1">Larry Cucumber</creator>
            <modifier id="1">Larry Cucumber</modifier>
            <created>2013-04-08 06:51:45</created>
            <modified>2013-04-08 06:51:45</modified>
          </participant>
        </participants>
      </group>
    </groups>
  </response>
</ccb_api>
```

### Manage Group Leaders

---

The Manage Group Leaders service allows you to set the list of leaders of the specified group.

NOTE: The main group leader will not be allowed to be changed through this service. If their id is included\
in the list of leader_ids, it will be ignored when leaders are assigned.

#### Service Name

manage_group_leaders

#### Required Parameters

| name       | type              |
| ---------- | ----------------- |
| group_id   | integer           |
| leader_ids | array of integers |

#### Example Curl

```
  curl -u user:pass "https://yourchurch.ccbchurch.com/api.php?srv=manage_group_leaders&group_id=13&leader_ids\[\]=1&leader_ids\[\]=2"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="manage_group_leaders" name="srv"/>
      <argument value="13" name="group_id"/>
      <argument value="" name="leader_ids"/>
    </parameters>
  </request>
  <response>
    <service>manage_group_leaders</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <group id="13">
      <name>Fours</name>
      <leaders>
        <leader id="1">
          <name>Jacki Clark</name>
        </leader>
        <leader id="2">
          <name>Carol Darling</name>
        </leader>
        <leader id="1018">
          <name>Dakota Pyle</name>
        </leader>
      </leaders>
    </group>
  </response>
</ccb_api>
```

### Group Profile From ID

---

The Group Profiles From ID service allows you to pass in a given ID and have that group returned to you. The image link in the image element will expire, and should be cached.\

-   Main_leader and leader elements are always populated

The participants element may result in a timeout:\

-   it is strongly recommended to **always send include_participants as false** to avoid timeout issues\
-   include_participants will otherwise default to true - this will result in future timeout issues under load\
-   the group_participants service is recommended for participants

#### Service Name

group_profile_from_id

#### Required Parameters

| name | type    |
| ---- | ------- |
| id   | integer |

#### Optional Parameters

| name                 | type                    |
| -------------------- | ----------------------- | ------------------------------------------------------------------------ |
| include_participants | boolean (default true)  | always send include_participants=false to avoid potential timeout issues |
| include_image_link   | boolean (default false) |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=group_profile_from_id&id=23&include_participants=false"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="group_profile_from_id" name="srv"/>
      <argument value="23" name="id"/>
    </parameters>
  </request>
  <response>
    <service>group_profile_from_id</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <groups count="1">
      <group id="23">
        <name>**Ninja Turtle Club**</name>
        <description>Fight by night</description>
        <image>https://s3.amazonaws.com/ccbchurch/40622/pics/g_23?AWSAccessKeyId=AKIAJ4CISARDRJPE4ERQ&amp;Expires=1390930062&amp;  Signature=pzP73TsoROOhQhZyEu2Deg3Tsy4%3D</image>
        <campus id="1">Church of Cucumbers</campus>
        <main_leader id="49">
          <first_name>Group</first_name>
          <last_name>Leader</last_name>
          <full_name>Group Leader</full_name>
          <email>tsebastian@churchcommunitybuilder.com</email>
          <phones>
            <phone type="mobile"></phone>
          </phones>
        </main_leader>
        <leaders>
          <leader id="34">
            <first_name>Assistant</first_name>
            <last_name>Group Leader</last_name>
            <full_name>Assistant Group Leader</full_name>
            <email>tsebastian@ccbhq.com</email>
            <phones>
              <phone type="mobile"></phone>
            </phones>
          </leader>
        </leaders>
        <participants/>
        <group_type id="1">Care / Small Group</group_type>
        <department id="0"></department>
        <area id="0"></area>
        <calendar_feed>webcal://yourchurch.ccbchurch.com/group_calendar.ics?id=23&amp;tk=9AABQK9DBD4ZUK426MSM6QZSKDJKS2U9</calendar_feed>
        <registration_forms/>
        <current_members>9</current_members>
        <group_capacity>Unlimited</group_capacity>
        <addresses/>
        <meeting_day id="0"></meeting_day>
        <meeting_time id="0"></meeting_time>
        <childcare_provided>false</childcare_provided>
        <interaction_type>Members Interact</interaction_type>
        <membership_type>Invitation or Request Required</membership_type>
        <notification>false</notification>
        <user_defined_fields/>
        <listed>true</listed>
        <public_search_listed>false</public_search_listed>
        <inactive>false</inactive>
        <creator id="1">Larry Cucumber</creator>
        <modifier id="1">Larry Cucumber</modifier>
        <created>2012-09-20 08:51:01</created>
        <modified>2012-10-05 16:34:47</modified>
      </group>
    </groups>
  </response>
</ccb_api>
```

### Group Profiles

---

The Group Profiles service allows you to pass in a given date and have all groups created or modified since that date returned to you. If a date is not provided, all groups in the system will be returned. The image link in the image element will expire, and should be cached. Including it will significantly increase the runtime of the service and may cause a timeout. Please consider using the "per_page" and "page" parameters if you want to get the images from your groups.\

-   Main_leader and leader elements are always populated

The participants element may result in a timeout:\

-   it is strongly recommended to **always send include_participants as false** to avoid timeout issues\
-   include_participants will otherwise default to true - this will result in future timeout issues under load\
-   the group_participants service is recommended for participants

#### Service Name

group_profiles

#### Required Parameters

None

#### Optional Parameters

| name                 | type                    |
| -------------------- | ----------------------- | ------------------------------------------------------------------------ |
| modified_since       | datetime                |
| include_participants | boolean (default true)  | always send include_participants=false to avoid potential timeout issues |
| include_image_link   | boolean (default false) |
| page                 | int                     | if per_page is set this defaults to 1                                    |
| per_page             | int                     | if page is set this defaults to 25                                       |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=group_profiles&modified_since=2010-02-01&include_participants=false"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
     <parameters>
        <argument value="group_profiles" name="srv"/>
        <argument value="2010-02-01" name="modified_since"/>
     </parameters>
  </request>
  <response>
    <service>group_profiles</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <groups count="34">
      <group id="1">
        <name>Entire Church Group</name>
        <description>Everyone is a part of the church. This is the group for the entire church.</description>
        <image>https://s3.amazonaws.com/ccbchurch/40622/pics/g_1?AWSAccessKeyId=AKIAJ4CISARDRJPE4ERQ&amp;Expires=1390930061&amp;Signature=lCcx73c682HA3blh5LbBbtrl7VU%3D</image>
        <campus id="1">Church of Cucumbers</campus>
        <main_leader id="1">
           <first_name>Larry</first_name>
           <last_name>Cucumber</last_name>
           <full_name>Larry Cucumber</full_name>
           <email>test@test.com</email>
           <phones>
              <phone type="mobile">(012) 345-6789</phone>
           </phones>
        </main_leader>
        <leaders/>
        <participants/>
        <group_type id="5">Church</group_type>
        <department id="1">hello</department>
        <area id="1">Church</area>
        <calendar_feed>webcal://testing_stable.ccbchurch.com/group_calendar.ics?id=1&amp;tk=939102BA159F102DA8580019B9B51440</calendar_feed>
        <registration_forms/>
        <current_members>56</current_members>
        <group_capacity>Unlimited</group_capacity>
        <addresses>
          <address type="meeting">
            <name>Meeting Address</name>
            <street_address>Meeting Address
Street</street_address>
            <city>City</city>
            <state></state>
            <zip></zip>
            <longitude></longitude>
            <latitude></latitude>
            <line_1>Meeting Address
Street</line_1>
            <line_2>City</line_2>
          </address>
        </addresses>
        <meeting_day id="0"></meeting_day>
        <meeting_time id="0"></meeting_time>
        <childcare_provided>false</childcare_provided>
        <interaction_type>Annoucement Only</interaction_type>
        <membership_type>Open to All</membership_type>
        <notification>false</notification>
        <user_defined_fields/>
        <listed>true</listed>
        <public_search_listed>false</public_search_listed>
        <inactive>false</inactive>
        <creator id="1">Larry Cucumber</creator>
        <modifier id="1">Larry Cucumber</modifier>
        <created>2003-11-26 13:03:43</created>
        <modified>2011-12-13 08:38:11</modified>
      </group>
      ...
      <group id="41">
        <name>New group created via API</name>
        <description>None</description>
        <image>https://cdn3.ccbchurch.com/preSTABLE/images/group-default.gif</image>
        <campus id="1">Church of Cucumbers</campus>
        <main_leader id="1">
          <first_name>Larry</first_name>
          <last_name>Cucumber</last_name>
          <full_name>Larry Cucumber</full_name>
          <email>test@test.com</email>
          <phones>
            <phone type="mobile">(012) 345-6789</phone>
          </phones>
        </main_leader>
        <leaders/>
        <participants/>
        <group_type id="1">Care / Small Group</group_type>
        <department id="0"></department>
        <area id="0"></area>
        <calendar_feed>webcal://yourchurch.ccbchurch.com/group_calendar.ics?id=41&amp;tk=VVNY5RHV2V5PBJP3AFCRBR54PA2C7FHM</calendar_feed>
        <registration_forms/>
        <current_members>1</current_members>
        <group_capacity>Unlimited</group_capacity>
        <addresses/>
        <meeting_day id="0"></meeting_day>
        <meeting_time id="0"></meeting_time>
        <childcare_provided>false</childcare_provided>
        <interaction_type>Members Interact</interaction_type>
        <membership_type>Invitation or Request Required</membership_type>
        <notification>false</notification>
        <user_defined_fields/>
        <listed>true</listed>
        <public_search_listed>false</public_search_listed>
        <inactive>false</inactive>
        <creator id="0">System User</creator>
        <modifier id="0">System User</modifier>
        <created>2014-01-28 10:25:57</created>
        <modified>2014-01-28 10:25:57</modified>
      </group>
    </groups>
  </response>
</ccb_api>
```

### Remove Individual From Group

---

The Remove Individual From Group service will accept a group id and an individual id and remove that user from that group.

#### Service Name

remove_individual_from_group

#### Required Parameters

| name     | type    |
| -------- | ------- |
| id       | integer |
| group_id | integer |

#### Optional Parameters

none

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=remove_individual_from_group&id=48&group_id=12"
```

#### Example XML

see group_profile_from_id

### Update Group

---

The Update Group service will accept form-encoded data representing an existing group and update the group in the Church Community Builder system. The service returns the profile of the updated group.

#### Service Name

update_group

#### Required Parameters

| name | type    |
| ---- | ------- |
| id   | integer |

#### Optional Parameters

| name                            | type         | notes                                                                                                                  |
| ------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------- |
| name                            | string       | **Must be sent via HTTP POST**                                                                                         |
| description                     | string       | **Must be sent via HTTP POST**                                                                                         |
| campus_id                       | integer      | **Must be sent via HTTP POST**                                                                                         |
| group_type_id                   | integer      | **Must be sent via HTTP POST**                                                                                         |
| department_id                   | integer      | **Must be sent via HTTP POST**                                                                                         |
| area_id                         | integer      | **Must be sent via HTTP POST**                                                                                         |
| group_capacity                  | integer      | **Must be sent via HTTP POST**                                                                                         |
| meeting_location_street_address | string       | **Must be sent via HTTP POST**                                                                                         |
| meeting_location_city           | string       | **Must be sent via HTTP POST**                                                                                         |
| meeting_location_state          | string[2--3] | **Must be sent via HTTP POST** Must be two or three uppercase characters                                               |
| meeting_location_zip            | string       | **Must be sent via HTTP POST**                                                                                         |
| meeting_day_id                  | integer      | **Must be sent via HTTP POST**                                                                                         |
| meeting_time_id                 | integer      | **Must be sent via HTTP POST**                                                                                         |
| childcare_provided              | boolean      | **Must be sent via HTTP POST**                                                                                         |
| interaction_type                | string       | **Must be sent via HTTP POST** Must be one of the following: 'Announcement Only'; 'Members Interact'; 'Administrative' |
| membership_type                 | string       | **Must be sent via HTTP POST** Must be one of the following: 'Open to All'; 'Invitation Required'; 'Request Required'  |
| notification                    | boolean      | **Must be sent via HTTP POST**                                                                                         |
| listed                          | boolean      | **Must be sent via HTTP POST**                                                                                         |
| public_search_listed            | boolean      | **Must be sent via HTTP POST**                                                                                         |
| udf_group_pulldown_1_id         | integer      | **Must be sent via HTTP POST**                                                                                         |
| udf_group_pulldown_2_id         | integer      | **Must be sent via HTTP POST**                                                                                         |
| udf_group_pulldown_3_id         | integer      | **Must be sent via HTTP POST**                                                                                         |
| inactive                        | boolean      | **Must be sent via HTTP POST**                                                                                         |
| modifier_id                     | integer      | **Must be sent via HTTP POST**                                                                                         |
| owner_id                        | integer      | **Must be sent via HTTP POST**                                                                                         |
| director_id                     | integer      | **Must be sent via HTTP POST**                                                                                         |
| coach_id                        | integer      | **Must be sent via HTTP POST**                                                                                         |

#### Example Curl

```
  curl -u user:pass -d "group_capacity=10&notification=true" "https://yourchurch.ccbchurch.com/api.php?srv=update_group&id=470"
```

#### Example XML

see group_profile_from_id

## Individual Profile Services

The Church Community Builder Individual Profile services allow you to have access to your membership information. This information can be used as you wish on your website or in other applications in use across your church.

### Add Significant Event for Individual

---

The Add Significant Event for Individual service creates a significant event record for the specified individual. The list of acceptable event_id values comes from the Significant Event List service.

#### Service Name

add_individual_significant_event

#### Required Parameters

| name     | type     |
| -------- | -------- |
| id       | integer  |
| event_id | integer  |
| date     | datetime |

#### Optional Parameters

None

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=add_individual_significant_event&event_id=1&id=48&date=2013-08-23"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="add_individual_significant_event" name="srv"/>
      <argument value="1" name="event_id"/>
      <argument value="48" name="id"/>
      <argument value="2013-08-23" name="date"/>
    </parameters>
  </request>
  <response>
    <service>add_individual_significant_event</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <individuals count="1">
      <individual id="48">
        <name>Larry</name>
        <campus id="1">Church of Cucumbers</campus>
        <significant_events>
          <significant_event id="1">
            <name>High School Graduation</name>
            <date>2013-08-23 00:00:00</date>
            <modifier id="0">System User</modifier>
            <modified>2014-01-28 10:25:37</modified>
          </significant_event>
        </significant_events>
      </individual>
    </individuals>
  </response>
</ccb_api>
```

### Individual MICR

---

The Individual MICR service will let you create a MICR for an individual.

#### Service Name

create_individual_micr

#### Required Parameters

| name           | type    |
| -------------- | ------- |
| id             | integer |
| account_number | string  |
| routing_number | string  |

#### Optional Paramters

none

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=create_individual_micr&id=48&account_number=222222444&routing_number=123456789"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="create_individual_micr" name="srv"/>
      <argument value="48" name="id"/>
      <argument value="222222444" name="account_number"/>
      <argument value="123456789" name="routing_number"/>
    </parameters>
  </request>
  <response>
    <service>create_individual_micr</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <result>true</result>
  </response>
</ccb_api>
```

### Community Login

---

The Community Login service will return the individual ID for an individual in the Church Community Builder system. The parameters are the username and password assigned for the individual.

#### Service Name

individual_id_from_login_password

#### Required Parameters

| name     | type   | notes                          |
| -------- | ------ | ------------------------------ |
| login    | string | **Must be sent via HTTP POST** |
| password | string | **Must be sent via HTTP POST** |

#### Optional Parameters

None

#### Example Curl

```
  curl -u user:pass -d "login=myusername&password=mypassword" "https://yourchurch.ccbchurch.com/api.php?srv=individual_id_from_login_password"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="individual_id_from_login_password" name="srv"/>
      <argument value="example" name="login"/>
      <argument value="example" name="password"/>
    </parameters>
  </request>
  <response>
    <items count="1">
      <item>
        <item_id type="individual">48</item_id>
        <id>48</id>
      </item>
    </items>
  </response>
</ccb_api>
```

### Create Individual

---

The Create Individual service will accept form-encoded data representing a new individual and create a new individual (and family, if needed) in the Church Community Builder system. The service returns the new profile of the individual that was created.

#### Service Name

create_individual

#### Required Parameters

first_name | string | **Must be sent via HTTP POST**\
last_name | string | **Must be sent via HTTP POST**

#### Optional Parameters

| name                   | type     | notes                                                                                                                                                                                        |
| ---------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| middle_name            | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| legal_first_name       | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| sync_id                | integer  | **Must be sent via HTTP POST**                                                                                                                                                               |
| other_id               | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| salutation             | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| suffix                 | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| campus_id              | integer  | **Must be sent via HTTP POST**                                                                                                                                                               |
| family_id              | integer  | **Must be sent via HTTP POST**                                                                                                                                                               |
| family_position        | string   | **Must be sent via HTTP POST** Must be one of the following: 'h'; 's'; 'c'; 'o', indicating 'head of household', 'spouse', 'child', or 'other'                                               |
| marital_status         | string   | **Must be sent via HTTP POST** Must be one of the following: 's'; 'm'; 'w'; 'd'; 'p'; ' ', indicating 'single', 'married', 'widowed', 'divorced', 'separated', or 'not selected'             |
| gender                 | string   | **Must be sent via HTTP POST** Must be either 'M' or 'F', indicating either Male or Female                                                                                                   |
| birthday               | datetime | **Must be sent via HTTP POST**                                                                                                                                                               |
| anniversary            | datetime | **Must be sent via HTTP POST**                                                                                                                                                               |
| deceased               | datetime | **Must be sent via HTTP POST**                                                                                                                                                               |
| limited_access_user    | integer  | **Must be sent via HTTP POST** Must be either 1 or 0, indicating either true or false. If not provided, the Campus Privacy Defaults setting will be used.                                    |
| membership_date        | datetime | **Must be sent via HTTP POST**                                                                                                                                                               |
| membership_end         | datetime | **Must be sent via HTTP POST**                                                                                                                                                               |
| membership_type_id     | integer  | **Must be sent via HTTP POST**                                                                                                                                                               |
| giving_number          | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| email                  | string   | **Must be sent via HTTP POST** Must be a valid email                                                                                                                                         |
| mailing_street_address | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| mailing_city           | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| mailing_state          | string   | **Must be sent via HTTP POST** Must be two or three uppercase characters                                                                                                                     |
| mailing_zip            | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| mailing_country        | string   | **Must be sent via HTTP POST** Must be two uppercase characters                                                                                                                              |
| home_street_address    | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| home_city              | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| home_state             | string   | **Must be sent via HTTP POST** Must be two or three uppercase characters                                                                                                                     |
| home_zip               | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| home_country           | string   | **Must be sent via HTTP POST** Must be two uppercase characters                                                                                                                              |
| work_street_address    | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| work_city              | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| work_state             | string   | **Must be sent via HTTP POST** Must be two or three uppercase characters                                                                                                                     |
| work_zip               | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| work_country           | string   | **Must be sent via HTTP POST** Must be two uppercase characters                                                                                                                              |
| work_title             | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| other_street_address   | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| other_city             | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| other_state            | string   | **Must be sent via HTTP POST** Must be two or three uppercase characters                                                                                                                     |
| other_zip              | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| other_country          | string   | **Must be sent via HTTP POST** Must be two uppercase characters                                                                                                                              |
| contact_phone          | string   | **\*DEPRECATED** If you pass contact_phone and do not pass mobile_phone, it will populate the mobile_phone. If you pass both, contact_number will be ignored. **Must be sent via HTTP POST** |
| home_phone             | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| work_phone             | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| mobile_phone           | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| mobile_carrier         | int      | **Must be sent via HTTP POST** If not a valid id will be set to zero. Use mobile_carrier_list service to get values.                                                                         |
| allergies              | string   | **Must be sent via HTTP POST**                                                                                                                                                               |
| confirmed_no_allergies | boolean  | **Must be sent via HTTP POST**                                                                                                                                                               |
| baptized               | boolean  | **Must be sent via HTTP POST**                                                                                                                                                               |
| udf*text*#             | string   | # is a number between 1--12 inclusively, **Must be sent via HTTP POST**                                                                                                                      |
| udf*date*#             | datetime | # is a number between 1--6 inclusively, **Must be sent via HTTP POST**                                                                                                                       |
| udf*pulldown*#         | integer  | # is a number between 1--6 inclusively, **Must be sent via HTTP POST**                                                                                                                       |
| creator_id             | integer  | **Must be sent via HTTP POST**                                                                                                                                                               |

#### Example Curl

```
  curl -u user:pass -d "first_name=Ken&last_name=Scott&campus_id=0&family_id=0&family_position=c&gender=m&birthday=2%2F12%2F1966&anniversary=May+6%2C+1989&membership_date=2010-01-01&email=ken%40test.net&mailing_street_address=12265+Oracle+Blvd%2C+Suite+105&mailing_city=Colorado+Springs&mailing_state=CO&mailing_zip=80921&mailing_country=US&mobile_phone=719-266-2888" "https://yourchurch.ccbchurch.com/api.php?srv=create_individual"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="create_individual" name="srv"/>
    </parameters>
  </request>
  <response>
    <service>create_individual</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <individuals count="1">
      <individual id="63">
        <sync_id></sync_id>
        <other_id></other_id>
        <giving_number></giving_number>
        <campus id="1">Church of Cucumbers</campus>
        <family id="49">The Scott Family</family>
        <family_image>https://cdn3.ccbchurch.com/preSTABLE/images/group-default.gif</family_image>
        <family_position>Primary Contact</family_position>
        <family_members/>
        <first_name>Ken</first_name>
        <last_name>Scott</last_name>
        <middle_name></middle_name>
        <legal_first_name></legal_first_name>
        <full_name>Ken Scott</full_name>
        <salutation></salutation>
        <suffix></suffix>
        <limited_access_user>1</limited_access_user>
        <image>https://cdn3.ccbchurch.com/preSTABLE/images/profile-default.gif</image>
        <email>ken@test.net</email>
        <allergies></allergies>
        <confirmed_no_allergies>false</confirmed_no_allergies>
        <addresses>
          <address type="mailing">
            <street_address>12265 Oracle Blvd, Suite 105</street_address>
            <city>Colorado Springs</city>
            <state>CO</state>
            <zip>80921</zip>
            <country code="US">United States</country>
            <line_1>12265 Oracle Blvd, Suite 105</line_1>
            <line_2>Colorado Springs, CO 80921</line_2>
            <latitude>39.010822</latitude>
            <longitude>-104.815760</longitude>
          </address>
          <address type="home">
            <street_address></street_address>
            <city></city>
            <state></state>
            <zip></zip>
            <country code=""> </country>
            <line_1></line_1>
            <line_2></line_2>
          </address>
          <address type="work">
            <street_address></street_address>
            <city></city>
            <state></state>
            <zip></zip>
            <country code=""> </country>
            <line_1></line_1>
            <line_2></line_2>
          </address>
          <address type="other">
            <street_address></street_address>
            <city></city>
            <state></state>
            <zip></zip>
            <country code=""> </country>
            <line_1></line_1>
            <line_2></line_2>
          </address>
        </addresses>
        <phones>
          <phone type="home"></phone>
          <phone type="work"></phone>
          <phone type="mobile"></phone>
        </phones>
        <mobile_carrier id="0"> </mobile_carrier>
        <gender>M</gender>
        <marital_status></marital_status>
        <birthday>1966-02-12</birthday>
        <anniversary></anniversary>
        <baptized>false</baptized>
        <deceased></deceased>
        <membership_type id=""> </membership_type>
        <membership_date></membership_date>
        <membership_end></membership_end>
        <receive_email_from_church>true</receive_email_from_church>
        <default_new_group_messages>Group Default</default_new_group_messages>
        <default_new_group_comments>Group Default</default_new_group_comments>
        <default_new_group_digest>Group Default</default_new_group_digest>
        <default_new_group_sms>Never</default_new_group_sms>
        <privacy_settings>
          <profile_listed>true</profile_listed>
          <mailing_address id="2">My Friends</mailing_address>
          <home_address id="2">My Friends</home_address>
          <home_phone id="3">My Friends and Group Members</home_phone>
          <work_phone id="2">My Friends</work_phone>
          <mobile_phone id="2">My Friends</mobile_phone>
          <emergency_phone id="2">My Friends</emergency_phone>
          <birthday id="4">Everyone</birthday>
          <anniversary id="4">Everyone</anniversary>
          <gender id="4">Everyone</gender>
          <marital_status id="2">My Friends</marital_status>
          <user_defined_fields id="2">My Friends</user_defined_fields>
          <allergies id="1">Church Leadership</allergies>
        </privacy_settings>
        <active>true</active>
        <creator id="0">System User</creator>
        <modifier id="0">System User</modifier>
        <created>2014-01-28 14:24:17</created>
        <modified>2014-01-28 14:24:17</modified>
        <user_defined_text_fields/>
        <user_defined_date_fields/>
        <user_defined_pulldown_fields/>
      </individual>
    </individuals>
  </response>
</ccb_api>
```

### Duplicate Individuals List

---

List potential duplicates matching the giving query parameters. The more parameters used, the better the matching scores.

#### Service Name

duplicate_individuals_list

#### Optional Parameters

| name            | type   | notes                                                                 |
| --------------- | ------ | --------------------------------------------------------------------- |
| min_match_score | int    | The minimum threshold score that must be reached to return the record |
| family_id       | int    | Exclude individuals belonging to the family_id                        |
| first_name      | string | Match the first name                                                  |
| last_name       | string | Match the last name                                                   |
| phone           | string | Match the home, work, or mobile phone number                          |
| email           | string | Match the email address                                               |
| streets         | string | Match the home, mailing, or work address                              |
| page            | int    | if per_page is set this defaults to 1                                 |
| per_page        | int    | if page is set this defaults to 25                                    |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=duplicate_individuals_list&last_name=A'bra&phone=5555551212"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="duplicate_individuals_list" name="srv"/>
      <argument value="james" name="first_name"/>
    </parameters>
  </request>
  <response>
    <individuals count="1">
        <individual id="97" family_id="74">
            <match_score>19</match_score>
            <first_name>James</first_name>
            <last_name>A'bra</last_name>
            <middle_name>John</middle_name>
            <legal_first_name>James</legal_first_name>
            <salutation>Dr</salutation>
            <suffix>IV</suffix>
            <email>jimmyabra84@gmail.com</email>
            <birthday>1978-04-23</birthday>
            <gender>M</gender>
            <family_position>Primary Contact</family_position>
            <membership_type id="1">Member</membership_type>
            <addresses>
                 <address type="mailing">
                    <street_address>10807 New Allegiance Dr.</street_address>
                    <city>Colorado Springs</city>
                    <state>CO</state>
                    <zip>80921</zip>
                    <country code="US">United States</country>
                    <line_1>10807 New Allegiance Dr.</line_1>
                    <line_2>Colorado Springs, CO 80921</line_2>
                    <latitude>38.988114</latitude>
                    <longitude>-104.804902</longitude>
                 </address>
                 <address type="home">
                      <street_address></street_address>
                      <city></city>
                      <state></state>
                      <zip></zip>
                      <country code=""> </country>
                      <line_1></line_1>
                      <line_2></line_2>
                 </address>
                 <address type="work">
                      <street_address></street_address>
                      <city></city>
                      <state></state>
                      <zip></zip>
                      <country code=""> </country>
                      <line_1></line_1>
                      <line_2></line_2>
                 </address>
                 <address type="other">
                      <street_address></street_address>
                      <city></city>
                      <state></state>
                      <zip></zip>
                      <country code=""> </country>
                      <line_1></line_1>
                      <line_2></line_2>
                 </address>
            </addresses>
            <phones>
                 <phone type="contact">1 760-555-1212</phone>
                 <phone type="home"></phone>
                 <phone type="work"></phone>
                 <phone type="mobile"></phone>
                 <phone type="emergency"></phone>
            </phones>
            <created>2000-01-15 17:00:00</created>
            <modified>2020-04-23 09:18:11</modified>
        </individual>
    </individuals>
  </response>
</ccb_api>
```

### Execute Saved Search\*

\*NOTE: This service will be removed from the library on October 25th, 2022. Please do not use this service in any new work, and if you are currently using this service, please change over to the newer service, "execute_advanced_search" which is detailed below.

---

The Execute Saved Search service will run the read-only, classic saved search indicated for the service and return the individual profiles of the individuals that currently satisfy the search.

#### Service Name

execute_search

#### Required Parameters

| name | type    |
| ---- | ------- |
| id   | integer |

#### Optional Parameters

| name             | type    |
| ---------------- | ------- |
| include_inactive | boolean |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=execute_search&id=1"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="execute_search" name="srv"/>
      <argument value="1" name="id"/>
    </parameters>
  </request>
  <response>
    <service>execute_search</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <individuals count="396">
    ...see individual profiles...
    </individuals>
  </response>
</ccb_api>
```

### Execute Saved Advanced Search

---

The Execute Saved Advanced Search service will run the newer saved advanced search, created via /goto/individuals, indicated for the service and return the individual profiles of the individuals that currently satisfy the search.

If an invalid id is sent, the response will include a 202 error.

#### Service Name

execute_advanced_search

#### Required Parameters

| name | type    |
| ---- | ------- |
| id   | integer |

#### Optional Parameters

| name             | type    |
| ---------------- | ------- |
| include_inactive | boolean |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=execute_advanced_search&id=1"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
<request>
	<parameters>
		<argument value="execute_advanced_search" name="srv"/>
		<argument value="1" name="id"/>
	</parameters>
</request>
<response>
	<service>execute_advanced_search</service>
	<service_action>execute</service_action>
	<availability>public</availability>
	<individuals count="396">
	...see individual profiles...
	</individuals>
</response>
</ccb_api>
```

### Family Detail

---

The Family Detail service will return information for a given family.

#### Service Name

family_detail

#### Required Parameters

| name      | type    |
| --------- | ------- |
| family_id | integer |

#### Optional Parameters

none

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=family_detail&family_id=1"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="family_detail" name="srv"/>
      <argument value="1" name="family_id"/>
    </parameters>
  </request>
  <items count="1">
    <item>
      <id>1</id>
      <sync_id>0</sync_id>
      <name>Tomato</name>
      <picture></picture>
      <picture_privacy_lvl>1</picture_privacy_lvl>
      <email></email>
      <email_listed>Yes</email_listed>
      <area_id>3</area_id>
      <area_name>SOUTH</area_name>
      <address_street>228 Calle Street</address_street>
      <address_city>Oceanside</address_city>
      <address_state>CA</address_state>
      <address_zip>54321</address_zip>
      <address_country>Albania</address_country>
      <address_carrier_route></address_carrier_route>
      <address_listed>No</address_listed>
      <address_privacy_lvl>4</address_privacy_lvl>
      <phone>5554333518</phone>
      <phone_listed>Yes</phone_listed>
      <phone_privacy_lvl>1</phone_privacy_lvl>
      <listed>Yes</listed>
      <creator_id>0</creator_id>
      <modifier_id>1</modifier_id>
      <date_created>2002-06-15 00:00:00</date_created>
      <date_modified>2014-01-16 11:29:18</date_modified>
    </item>
  </items>
</ccb_api>
```

### Family List

---

#### Service Name

family_list

#### Required Parameters

None

#### Optional Parameters

| name           | type     |
| -------------- | -------- |
| family_id      | int      |
| modified_since | datetime |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=family_list&modified_since=2014-07-22"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
     <request>
          <parameters>
               <argument value="family_list" name="srv"/>
               <argument value="2014-07-22" name="modified_since"/>
          </parameters>
     </request>
     <response>
          <service></service>
          <service_action>execute</service_action>
          <availability>public</availability>
          <families count="6">
               <family id="2468">
                    <individuals count="16">
                         <individual id="2770">
                              <first_name>Christopher</first_name>
                              <last_name>Marshall</last_name>
                              <type>other</type>
                         </individual>
                         ...
                         <individual id="2485">
                              <first_name>Amanda</first_name>
                              <last_name>Marshall</last_name>
                              <type>other</type>
                         </individual>
                    </individuals>
                    <modified>2014-07-22 13:40:09</modified>
               </family>
               ...
               <family id="3020">
                    <individuals count="1">
                         <individual id="3579">
                              <first_name>Erica</first_name>
                              <last_name>Smith</last_name>
                              <type>primary contact</type>
                         </individual>
                    </individuals>
                    <modified>2014-07-22 07:34:23</modified>
               </family>
          </families>
     </response>
</ccb_api>
```

### Individual Attendance

---

The Individual Attendance service will return a list of all events the specified individual has had attendance recorded for. If an individual is not specified, then the attendance for all individuals in the system will be returned.

#### Service Name

individual_attendance

#### Required Parameters

None

#### Optional Parameters

| name          | type |
| ------------- | ---- |
| individual_id | int  |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=individual_attendance&individual_id=48"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="individual_attendance" name="srv"/>
      <argument value="48" name="individual_id"/>
    </parameters>
  </request>
  <response>
    <service>individual_attendance</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <individuals count="1">
      <individual id="48">
        <name>Little Joe</name>
        <attendances>
          <attendance>
            <event id="776">Sunday School</event>
            <group id="1">Entire Church Group</group>
            <occurrence>2012-06-17 09:00:00</occurrence>
          </attendance>
          ...
          <attendance>
            <event id="1806">Kids Club!</event>
            <group id="1">Entire Church Group</group>
            <occurrence>2013-10-17 09:00:00</occurrence>
          </attendance>
        </attendances>
      </individual>
    </individuals>
  </response>
</ccb_api>
```

### Individual Calendar Listing

---

#### Service Name

individual_calendar_listing

#### Required Parameters

| name       | type     |
| ---------- | -------- |
| individual | integer  |
| date_start | datetime |
| date_end   | datetime |

#### Optional Parameters

None

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=individual_calendar_listing&id=48&date_start=2010-01-01"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="individual_calendar_listing" name="srv"/>
      <argument value="2010-01-01" name="date_start"/>
      <argument value="1" name="id"/>
    </parameters>
  </request>
  <item>
    <date>2010-01-01</date>
    <event_name ccb_id="1025">service 1 event</event_name>
    <event_description>&lt;a href=&quot;http://www.kingdomlifeinstitute.tv&quot; target=&quot;_blank&quot;&gt;click here&lt;/a&gt;</event_description>
    <start_time>08:00:00</start_time>
    <end_time>08:00:00</end_time>
    <event_duration>0</event_duration>
    <event_type></event_type>
    <location></location>
    <group_name ccb_id="191">Peterock's multiple personalities</group_name>
    <group_type>Peterock's</group_type>
    <grouping_name>Peterock's</grouping_name>
    <leader_name ccb_id="2468">Peter Marshall</leader_name>
    <leader_phone>(719) 266-2888</leader_phone>
    <leader_email>pmarshall@ccbhq.com</leader_email>
  </item>
  ...
  <item>
    <date>2010-01-22</date>
    <event_name ccb_id="1019">Crazy Recurrence</event_name>
    <event_description>Is that a word?</event_description>
    <start_time>19:00:00</start_time>
    <end_time>21:00:00</end_time>
    <event_duration>120</event_duration>
    <event_type></event_type>
    <location></location>
    <group_name ccb_id="192">Peterock's Therapy</group_name>
    <group_type>Interest's</group_type>
    <grouping_name></grouping_name>
    <leader_name ccb_id="1">Master Adama</leader_name>
    <leader_phone>27119785313</leader_phone>
    <leader_email>dingle@ccbhq.com</leader_email>
  </item>
</ccb_api>
```

### Individual Fit

---

The Individual Fit service allows the user to see what abilities, passions, and spiritual gifts are matched to an individual.

#### Service Name

individual_fit

#### Required Parameters

None

#### Optional Parameters

| name             | type    |
| ---------------- | ------- | ------------------------------------- |
| include_inactive | boolean |
| page             | int     | if per_page is set this defaults to 1 |
| per_page         | int     | if page is set this defaults to 25    |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=individual_fit"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
   <request>
      <parameters>
         <argument value="individual_fit" name="srv"/>
      </parameters>
   </request>
   <response>
      <service>individual_profiles</service>
      <service_action>execute</service_action>
      <availability>public</availability>
      <individuals count="3358">
         <individual id="1">
          <abilities count="1">
             <ability id="47">Art - Crafts</ability>
          </abilities>
          <spiritual_gifts count="1">
             <spiritual_gift id="1">Administration</spiritual_gift>
          </spiritual_gifts>
          <passions count="1">
             <passion id="2">People - Children</passion>
          </passions>
         </individual>
         ...
         <individual id="2998">
          <abilities count="0"></abilities>
          <spiritual_gifts count="1">
             <spiritual_gift id="2">Apostleship</spiritual_gift>
          </spiritual_gifts>
          <passions count="0"></passions>
         </individual>
      </individuals>
   </response>
</ccb_api>
```

### Individual Groups

---

The Individual Groups service will return a list of all groups the specified individual is associated with. If an individual is not specified, then the groups for all individuals in the system will be returned.

#### Service Name

individual_groups

#### Required Parameters

None

#### Optional Parameters

| name           | type     |
| -------------- | -------- |
| individual     | integer  |
| modified_since | datetime |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=individual_groups&individual_id=48"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="individual_groups" name="srv"/>
      <argument value="48" name="individual_id"/>
    </parameters>
  </request>
  <response>
    <service>individual_groups</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <individuals count="1">
      <individual>
        <individual_id type="individual">48</individual_id>
        <id>48</id>
        <name_first>Larry</name_first>
        <name_last>Bob</name_last>
        <full_name>Larry Bob</full_name>
        <receive_email_from_church>1</receive_email_from_church>
        <groups count="3">
          <group>
            <group_id type="groups">1</group_id>
            <id>1</id>
            <name>Entire Church Group</name>
            <receive_email_from_group>1</receive_email_from_group>
            <receive_sms_from_group></receive_sms_from_group>
            <notify_comments></notify_comments>
          </group>
          ...
          <group>
            <group_id type="groups">23</group_id>
            <id>23</id>
            <name>**Ninja Turtle Club**</name>
            <receive_email_from_group>1</receive_email_from_group>
            <receive_sms_from_group></receive_sms_from_group>
            <notify_comments>1</notify_comments>
          </group>
        </groups>
      </individual>
    </individuals>
  </response>
</ccb_api>
```

### Inactivate Individual

---

The Inactivate Individual service will make the individual identified by the ID inactive in the Church Community Builder system. Once made inactive, the individual will no longer be available through API requests or in most areas of the Church Community Builder system. This is a logical delete for the individual.

#### Service Name

individual_inactivate

#### Required Parameters

| name | type    |
| ---- | ------- |
| id   | integer |

#### Optional Parameters

None

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=individual_inactivate&id=48"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
  <parameters>
    <argument value="individual_inactivate" name="srv"/>
    <argument value="48" name="id"/>
  </parameters>
  </request>
  <individuals count="1">
  <individual id="48">
    <name>Larry Boy</name>
    <inactive>true</inactive>
    <success>true</success>
  </individual>
  </individuals>
</ccb_api>
```

### Individual Notes

---

The Individual Notes service will return a list of all notes the specified individual has had written about them. If an individual is not specified, then the notes for all individuals in the system will be returned. By default, this service does not return private notes.

#### Service Name

individual_notes

#### Required Parameters

None

#### Optional Parameters

| name                  | type     | notes                                                                |
| --------------------- | -------- | -------------------------------------------------------------------- |
| individual_id         | integer  |
| include_private_notes | integer  | '0' is Private Note; '1' is Context Leaders Only; '2' is All Leaders |
| start_date            | datetime | Beginning of range when notes were created                           |
| end_date              | datetime | End of range when notes were created                                 |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=individual_notes&individual_id=48"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="individual_notes" name="srv"/>
      <argument value="48" name="individual_id"/>
    </parameters>
  </request>
  <response>
    <service>individual_notes</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <individuals count="1">
      <individual id="48">
        <name>Larry Bob</name>
        <campus id="1">Church of Cucumbers</campus>
        <notes/>
      </individual>
    </individuals>
  </response>
</ccb_api>
```

### Individual Profile from ID

---

The Individual Profile from ID service returns an individual profile for the ID provided. If the ID does not return a match, this service checks if this Individual was merged into another Individual. If this is the case, an additional element of <merged_into_individual_id> is returned in the response with the new Individual ID.

#### Service Name

individual_profile_from_id

#### Required Parameters

| name          | type    |
| ------------- | ------- |
| individual_id | integer |

#### Optional Parameters

| name             | type    |
| ---------------- | ------- |
| include_inactive | boolean |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=individual_profile_from_id&individual_id=48"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="individual_profile_from_id" name="srv"/>
      <argument value="48" name="individual_id"/>
    </parameters>
  </request>
  <response>
    <service>individual_profile_from_id</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <individuals count="1">
      <individual id="48">
        <sync_id></sync_id>
        <other_id></other_id>
        <giving_number></giving_number>
        <campus id="1">Church of Cucumbers</campus>
        <family id="36">The Bob Family</family>
        <family_image>https://cdn3.ccbchurch.com/preSTABLE/images/group-default.gif</family_image>
        <family_position>Primary Contact</family_position>
        <family_members/>
        <first_name>Larry</first_name>
        <last_name>Bob</last_name>
        <middle_name></middle_name>
        <legal_first_name></legal_first_name>
        <full_name>Larry Bob</full_name>
        <salutation></salutation>
        <suffix></suffix>
        <image>https://cdn3.ccbchurch.com/preSTABLE/images/profile-default.gif</image>
        <email>tsebastian@churchcommunitybuilder.com</email>
        <allergies></allergies>
        <confirmed_no_allergies>false</confirmed_no_allergies>
        <addresses>
          <address type="mailing">
            <street_address></street_address>
            <city></city>
            <state>CO</state>
            <zip></zip>
            <country code=""> </country>
            <line_1></line_1>
            <line_2>CO</line_2>
            <latitude></latitude>
            <longitude></longitude>
          </address>
          <address type="home">
            <street_address></street_address>
            <city></city>
            <state></state>
            <zip></zip>
            <country code=""> </country>
            <line_1></line_1>
            <line_2></line_2>
          </address>
          <address type="work">
            <street_address></street_address>
            <city></city>
            <state></state>
            <zip></zip>
            <country code=""> </country>
            <line_1></line_1>
            <line_2></line_2>
          </address>
          <address type="other">
            <street_address></street_address>
            <city></city>
            <state></state>
            <zip></zip>
            <country code=""> </country>
            <line_1></line_1>
            <line_2></line_2>
          </address>
        </addresses>
        <phones>
          <phone type="home">(098) 765-4321</phone>
          <phone type="work"></phone>
          <phone type="mobile"></phone>
        </phones>
        <mobile_carrier id="0"> </mobile_carrier>
        <gender></gender>
        <marital_status></marital_status>
        <birthday></birthday>
        <anniversary></anniversary>
        <baptized>false</baptized>
        <deceased></deceased>
        <membership_type id=""> </membership_type>
        <membership_date></membership_date>
        <membership_end></membership_end>
        <receive_email_from_church>true</receive_email_from_church>
        <default_new_group_messages>Group Default</default_new_group_messages>
        <default_new_group_comments>Group Default</default_new_group_comments>
        <default_new_group_digest>Group Default</default_new_group_digest>
        <default_new_group_sms>Never</default_new_group_sms>
        <privacy_settings>
           <profile_listed>true</profile_listed>
           <mailing_address id="2">My Friends</mailing_address>
           <home_address id="2">My Friends</home_address>
           <home_phone id="3">My Friends and Group Members</home_phone>
           <work_phone id="2">My Friends</work_phone>
           <mobile_phone id="2">My Friends</mobile_phone>
           <emergency_phone id="2">My Friends</emergency_phone>
           <birthday id="4">Everyone</birthday>
           <anniversary id="4">Everyone</anniversary>
           <gender id="4">Everyone</gender>
           <marital_status id="2">My Friends</marital_status>
           <user_defined_fields id="2">My Friends</user_defined_fields>
           <allergies id="1">Church Leadership</allergies>
        </privacy_settings>
        <active>true</active>
        <creator id="1">Larry Cucumber</creator>
        <modifier id="1">Larry Cucumber</modifier>
        <created>2012-09-25 15:29:15</created>
        <modified>2012-09-25 15:30:50</modified>
        <user_defined_text_fields/>
        <user_defined_date_fields/>
        <user_defined_pulldown_fields/>
      </individual>
    </individuals>
  </response>
</ccb_api>
```

### Individual Profile from Login and Password

---

The Individual Profile from Login and Password service returns an individual profile for the login and password provided.

#### Service Name

individual_profile_from_login_password

#### Required Parameters

| name     | type   | notes                          |
| -------- | ------ | ------------------------------ |
| login    | string | **Must be sent via HTTP POST** |
| password | string | **Must be sent via HTTP POST** |

#### Example Curl

```
  curl -u user:pass -d "login=myusername&password=mypassword" "https://yourchurch.ccbchurch.com/api.php?srv=individual_profile_from_login_password"
```

#### Example XML

see individual_profile_from_id

### Individual Profile from MICR

---

The Individual Profile from MICR service returns an individual profile for the account and routing numbers provided.

#### Service Name

#### Required Parameters

| name           | type   |
| -------------- | ------ |
| account_number | string |
| routing_number | string |

#### Optional Parameters

None

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=individual_profile_from_micr&account_number=222222444&routing_number=123456789"
```

#### Example XML

see individual_profile_from_id

### Individual Profiles

---

The Individual Profiles service allows you to pass in a given date and have all profiles created or modified since that date returned to you. If a date is not provided, all individual profiles in the system will be returned.

#### Service Name

individual_profiles

#### Required Parameters

None

#### Optional Parameters

| name             | type     |
| ---------------- | -------- | ------------------------------------- |
| modified_since   | datetime |
| include_inactive | boolean  |
| page             | int      | if per_page is set this defaults to 1 |
| per_page         | int      | if page is set this defaults to 25    |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=individual_profiles&modified_since=2010-02-01"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
     <parameters>
        <argument value="individual_profiles" name="srv"/>
        <argument value="2010-02-01" name="modified_since"/>
     </parameters>
  </request>
  <response>
    <service>individual_profiles</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <individuals count="58">
      <individual id="1">
        <sync_id></sync_id>
        <other_id></other_id>
        <giving_number>1234</giving_number>
        <campus id="1">Church of Cucumbers</campus>
        <family id="1">The Cucumber Family</family>
        <family_image>https://cdn3.ccbchurch.com/preSTABLE/images/group-default.gif</family_image>
        <family_position>Primary Contact</family_position>
        <family_members/>
        <first_name>Larry</first_name>
        <last_name>Cucumber</last_name>
        <middle_name></middle_name>
        <legal_first_name></legal_first_name>
        <full_name>Larry Cucumber</full_name>
        <salutation></salutation>
        <suffix></suffix>
        <image>https://s3.amazonaws.com/ccbchurch/40622/pics/ipic_1?AWSAccessKeyId=AKIAJ4CISARDRJPE4ERQ&amp;Expires=1390933581&amp;  Signature=7Jy9eiWEJUjAaxa%2F5lMvEml0MM0%3D</image>
        <email>test@test.com</email>
        <allergies></allergies>
        <confirmed_no_allergies>false</confirmed_no_allergies>
        <addresses>
          <address type="mailing">
            <street_address>10807 New Allegiance Dr.</street_address>
            <city>Colorado Springs</city>
            <state>CO</state>
            <zip>80921</zip>
            <country code="US">United States</country>
            <line_1>10807 New Allegiance Dr.</line_1>
            <line_2>Colorado Springs, CO 80921</line_2>
            <latitude>38.988114</latitude>
            <longitude>-104.804902</longitude>
          </address>
          <address type="home">
            <street_address></street_address>
            <city></city>
            <state></state>
            <zip></zip>
            <country code=""> </country>
            <line_1></line_1>
            <line_2></line_2>
          </address>
          <address type="work">
            <street_address></street_address>
            <city></city>
            <state></state>
            <zip></zip>
            <country code=""> </country>
            <line_1></line_1>
            <line_2></line_2>
          </address>
          <address type="other">
            <street_address></street_address>
            <city></city>
            <state></state>
            <zip></zip>
            <country code=""> </country>
            <line_1></line_1>
            <line_2></line_2>
          </address>
        </addresses>
        <phones>
           <phone type="mobile">(012) 345-6789</phone>
           <phone type="home"></phone>
           <phone type="work"></phone>
        </phones>
        <mobile_carrier id="0"> </mobile_carrier>
        <gender></gender>
        <marital_status></marital_status>
        <birthday>1988-07-21</birthday>
        <anniversary></anniversary>
        <baptized>false</baptized>
        <deceased></deceased>
        <membership_type id=""> </membership_type>
        <membership_date></membership_date>
        <membership_end></membership_end>
        <receive_email_from_church>true</receive_email_from_church>
        <default_new_group_messages>Group Default</default_new_group_messages>
        <default_new_group_comments>Group Default</default_new_group_comments>
        <default_new_group_digest>Group Default</default_new_group_digest>
        <default_new_group_sms>Never</default_new_group_sms>
        <privacy_settings>
           <profile_listed>true</profile_listed>
           <mailing_address id="2">My Friends</mailing_address>
           <home_address id="2">My Friends</home_address>
           <home_phone id="3">My Friends and Group Members</home_phone>
           <work_phone id="2">My Friends</work_phone>
           <mobile_phone id="3">My Friends and Group Members</mobile_phone>
           <emergency_phone id="2">My Friends</emergency_phone>
           <birthday id="4">Everyone</birthday>
           <anniversary id="4">Everyone</anniversary>
           <gender id="4">Everyone</gender>
           <marital_status id="2">My Friends</marital_status>
           <user_defined_fields id="2">My Friends</user_defined_fields>
           <allergies id="1">Church Leadership</allergies>
        </privacy_settings>
        <active>true</active>
        <creator id="1">Larry Cucumber</creator>
        <modifier id="1">Larry Cucumber</modifier>
        <created>2003-11-26 13:03:43</created>
        <modified>2014-01-07 12:02:31</modified>
        <user_defined_text_fields/>
        <user_defined_date_fields/>
        <user_defined_pulldown_fields/>
      </individual>
      ...
      <individual id="59">
        <sync_id></sync_id>
        <other_id></other_id>
        <giving_number></giving_number>
        <campus id="1">Church of Cucumbers</campus>
        <family id="46">The Financial Admin Family</family>
        <family_image>https://cdn3.ccbchurch.com/preSTABLE/images/group-default.gif</family_image>
        <family_position>Primary Contact</family_position>
        <family_members/>
        <first_name>Limited</first_name>
        <last_name>Financial Admin</last_name>
        <middle_name></middle_name>
        <legal_first_name></legal_first_name>
        <full_name>Limited Financial Admin</full_name>
        <salutation></salutation>
        <suffix></suffix>
        <image>https://cdn3.ccbchurch.com/preSTABLE/images/profile-default.gif</image>
        <email></email>
        <allergies></allergies>
        <confirmed_no_allergies>false</confirmed_no_allergies>
        <addresses>
          <address type="mailing">
            <street_address></street_address>
            <city></city>
            <state>CO</state>
            <zip></zip>
            <country code=""> </country>
            <line_1></line_1>
            <line_2>CO</line_2>
            <latitude></latitude>
            <longitude></longitude>
          </address>
          <address type="home">
            <street_address></street_address>
            <city></city>
            <state></state>
            <zip></zip>
            <country code=""> </country>
            <line_1></line_1>
            <line_2></line_2>
          </address>
          <address type="work">
            <street_address></street_address>
            <city></city>
            <state></state>
            <zip></zip>
            <country code=""> </country>
            <line_1></line_1>
            <line_2></line_2>
          </address>
          <address type="other">
            <street_address></street_address>
            <city></city>
            <state></state>
            <zip></zip>
            <country code=""> </country>
            <line_1></line_1>
            <line_2></line_2>
          </address>
        </addresses>
        <phones>
           <phone type="home"></phone>
           <phone type="work"></phone>
           <phone type="mobile"></phone>
        </phones>
        <mobile_carrier id="0"> </mobile_carrier>
        <gender></gender>
        <marital_status></marital_status>
        <birthday></birthday>
        <anniversary></anniversary>
        <baptized>false</baptized>
        <deceased></deceased>
        <membership_type id=""> </membership_type>
        <membership_date></membership_date>
        <membership_end></membership_end>
        <receive_email_from_church>true</receive_email_from_church>
        <default_new_group_messages>Group Default</default_new_group_messages>
        <default_new_group_comments>Group Default</default_new_group_comments>
        <default_new_group_digest>Group Default</default_new_group_digest>
        <default_new_group_sms>Never</default_new_group_sms>
        <privacy_settings>
           <profile_listed>true</profile_listed>
           <mailing_address id="2">My Friends</mailing_address>
           <home_address id="2">My Friends</home_address>
           <home_phone id="3">My Friends and Group Members</home_phone>
           <work_phone id="2">My Friends</work_phone>
           <mobile_phone id="2">My Friends</mobile_phone>
           <emergency_phone id="2">My Friends</emergency_phone>
           <birthday id="4">Everyone</birthday>
           <anniversary id="4">Everyone</anniversary>
           <gender id="4">Everyone</gender>
           <marital_status id="2">My Friends</marital_status>
           <user_defined_fields id="2">My Friends</user_defined_fields>
           <allergies id="1">Church Leadership</allergies>
        </privacy_settings>
        <active>true</active>
        <creator id="1">Larry Cucumber</creator>
        <modifier id="1">Larry Cucumber</modifier>
        <created>2012-11-05 15:05:01</created>
        <modified>2012-11-05 15:05:21</modified>
        <user_defined_text_fields/>
        <user_defined_date_fields/>
        <user_defined_pulldown_fields/>
      </individual>
    </individuals>
  </response>
</ccb_api>
```

### Individual Queues List

---

The Individual Queues service will return queue information about a specific individual.

#### Service Name

individual_queues

#### Required Parameters

| name | type |
| ---- | ---- |
| id   | int  |

#### Optional Parameters

| name   | type   | notes                                                                         |
| ------ | ------ | ----------------------------------------------------------------------------- |
| status | string | Must be one of the following: 'waiting'; 'in-progress'; 'done'; 'not-started' |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=individual_queues&id=48"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="individual_queues" name="srv"/>
      <argument value="48" name="id"/>
    </parameters>
  </request>
  <response>
    <queues count="1">
      <queue id="18">
        <name>1. Thank You Letter</name>
        <manager id="0"></manager>
        <status id="3">Not-Started</status>
        <entered>2014-01-28 10:25:42</entered>
        <due>2014-01-29</due>
        <completed></completed>
        <creator id="0">System User</creator>
        <modifier id="0">System User</modifier>
        <created>2014-01-28 10:25:42</created>
      </queue>
    </queues>
  </response>
</ccb_api>
```

### Individual Search

---

The Individual Search service will allow the user to send search criteria into the service and receive a list of individual profiles which match the criteria.

#### Service Name

individual_search

#### Required Parameters

None (at least one optional parameter must be provided, but no particular parameter is required)

#### Optional Parameters

| name             | type    | notes                                          |
| ---------------- | ------- | ---------------------------------------------- |
| first_name       | string  | considers First Name and Legal Name            |
| last_name        | string  |
| phone            | string  | considers Home, Work, and Mobile phone numbers |
| email            | string  |
| street_address   | string  |
| city             | string  |
| state            | string  |
| zip              | string  |
| family_id        | integer |
| include_inactive | boolean |
| max_results      | integer |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=individual_search&last_name=Bob"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="individual_search" name="srv"/>
      <argument value="Bob" name="last_name"/>
    </parameters>
  </request>
  <response>
    <service>individual_search</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <individuals count="1">
      <individual id="48">
        <sync_id></sync_id>
        <other_id></other_id>
        <giving_number></giving_number>
        <campus id="1">Church of Cucumbers</campus>
        <family id="36">The Bob Family</family>
        <family_image>https://cdn3.ccbchurch.com/preSTABLE/images/group-default.gif</family_image>
        <family_position>Primary Contact</family_position>
        <family_members/>
        <first_name>Larry</first_name>
        <last_name>Bob</last_name>
        <middle_name></middle_name>
        <legal_first_name></legal_first_name>
        <full_name>Larry Bob</full_name>
        <salutation></salutation>
        <suffix></suffix>
        <image>https://cdn3.ccbchurch.com/preSTABLE/images/profile-default.gif</image>
        <email>tsebastian@churchcommunitybuilder.com</email>
        <allergies></allergies>
        <confirmed_no_allergies>false</confirmed_no_allergies>
        <addresses>
          <address type="mailing">
            <street_address></street_address>
            <city></city>
            <state>CO</state>
            <zip></zip>
            <country code=""> </country>
            <line_1></line_1>
            <line_2>CO</line_2>
            <latitude></latitude>
            <longitude></longitude>
          </address>
          <address type="home">
            <street_address></street_address>
            <city></city>
            <state></state>
            <zip></zip>
            <country code=""> </country>
            <line_1></line_1>
            <line_2></line_2>
          </address>
          <address type="work">
            <street_address></street_address>
            <city></city>
            <state></state>
            <zip></zip>
            <country code=""> </country>
            <line_1></line_1>
            <line_2></line_2>
          </address>
          <address type="other">
            <street_address></street_address>
            <city></city>
            <state></state>
            <zip></zip>
            <country code=""> </country>
            <line_1></line_1>
            <line_2></line_2>
          </address>
        </addresses>
        <phones>
          <phone type="mobile">(098) 765-4321</phone>
          <phone type="home"></phone>
          <phone type="work"></phone>
        </phones>
        <mobile_carrier id="0"> </mobile_carrier>
        <gender></gender>
        <marital_status></marital_status>
        <birthday></birthday>
        <anniversary></anniversary>
        <baptized>false</baptized>
        <deceased></deceased>
        <membership_type id=""> </membership_type>
        <membership_date></membership_date>
        <membership_end></membership_end>
        <receive_email_from_church>true</receive_email_from_church>
        <default_new_group_messages>Group Default</default_new_group_messages>
        <default_new_group_comments>Group Default</default_new_group_comments>
        <default_new_group_digest>Group Default</default_new_group_digest>
        <default_new_group_sms>Never</default_new_group_sms>
        <privacy_settings>
           <profile_listed>true</profile_listed>
           <mailing_address id="2">My Friends</mailing_address>
           <home_address id="2">My Friends</home_address>
           <home_phone id="3">My Friends and Group Members</home_phone>
           <work_phone id="2">My Friends</work_phone>
           <mobile_phone id="2">My Friends</mobile_phone>
           <emergency_phone id="2">My Friends</emergency_phone>
           <birthday id="4">Everyone</birthday>
           <anniversary id="4">Everyone</anniversary>
           <gender id="4">Everyone</gender>
           <marital_status id="2">My Friends</marital_status>
           <user_defined_fields id="2">My Friends</user_defined_fields>
           <allergies id="1">Church Leadership</allergies>
        </privacy_settings>
        <active>true</active>
        <creator id="1">Larry Cucumber</creator>
        <modifier id="1">Larry Cucumber</modifier>
        <created>2012-09-25 15:29:15</created>
        <modified>2012-09-25 15:30:50</modified>
        <user_defined_text_fields/>
        <user_defined_date_fields/>
        <user_defined_pulldown_fields/>
      </individual>
    </individuals>
  </response>
</ccb_api>
```

### Merged Individuals

---

The Merged Individuals service returns a list of all individuals that have been removed from the Church Community Builder system using the duplicate merge feature.

#### Service Name

merged_individuals

#### Required Parameters

None

#### Optional Parameters

| name           | type     |
| -------------- | -------- |
| modified_since | datetime |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=merged_individuals"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
  <parameters>
    <argument value="merged_individuals" name="srv"/>
  </parameters>
  </request>
  <response>
  <service>merged_individuals</service>
  <service_action>execute</service_action>
  <availability>public</availability>
  <merged_individuals count="151">
    <merged_individual>
    <winner_id>45</winner_id>
    <loser_id>44</loser_id>
    <date_merged>2010-08-13 14:43:32</date_merged>
    <creator id="0">System User</creator>
    <modifier id="0">System User</modifier>
    <created>2010-08-13 14:43:30</created>
    <modified>2010-08-13 14:43:32</modified>
    </merged_individual>
    ...
    <merged_individual>
    <winner_id>46</winner_id>
    <loser_id>45</loser_id>
    <date_merged>2010-08-13 14:46:06</date_merged>
    <creator id="0">System User</creator>
    <modifier id="0">System User</modifier>
    <created>2010-08-13 14:46:05</created>
    <modified>2010-08-13 14:46:06</modified>
    </merged_individual>
  </merged_individuals>
  </response>
</ccb_api>
```

### Saved Search Listing\*

---

The Saved Search Listing service will return a listing of the saved searches in the Church Community Builder system. The ID of a saved search can be sent to the execute_search service to return the profiles of individuals that match the given search.

#### Service Name

search_list

#### Required Parameters

None

#### Optional Parameters

None

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=search_list"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="search_list" name="srv"/>
    </parameters>
  </request>
  <response>
    <service>search_list</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <searches count="6">
      <search id="106">
        <name>Indiv. Created in Last Month</name>
        <last_run>2010-09-04 08:14:34</last_run>
        <listed>1</listed>
        <creator id="1">Larry Cucumber</creator>
        <modifier id="1">Larry Cucumber</modifier>
        <created>2005-05-24 17:04:25</created>
        <modified>2010-09-04 08:14:34</modified>
				<search_id>106</search_id>
      </search>
      ...
      <search id="117">
        <name>Larry!!!</name>
        <last_run>2012-11-21 10:56:17</last_run>
        <listed>1</listed>
        <creator id="1">Larry Cucumber</creator>
        <modifier id="1">Larry Cucumber</modifier>
        <created>2012-11-21 10:56:17</created>
        <modified>2012-11-21 10:56:17</modified>
				<search_id>117</search_id>
      </search>
    </searches>
  </response>
</ccb_api>
```

### Saved Advanced Search Listing

\*NOTE: This service will be removed from the library on October 25th, 2022. Please do not use this service in any new work, and if you are currently using this service, please change over to the newer service, "saved_advanced_search_list" which is detailed below.

---

The Saved Advanced Search Listing service will return a listing of the saved advanced searches. The ID of a saved search can be sent to the execute_advanced_search service to return the profiles of individuals that match the given search.

#### Service Name

saved_advanced_search_list

#### Required Parameters

None

#### Optional Parameters

None

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=saved_advanced_search_list"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="search_list" name="srv"/>
    </parameters>
  </request>
  <response>
    <service>search_list;
    <service_action>execute</service_action>
    <availability>public</availability>
    <searches count="6">
      <search id="106">
        <name>Indiv. Created in Last Month</name>
        <last_run>2021-10-22 08:14:34</last_run>
        <listed>1</listed>
        <creator id="1">Larry Cucumber</creator>
        <modifier id="1">Larry Cucumber</modifier>
        <created>2021-10-01 17:04:25</created>
        <modified>2021-10-04 08:14:34</modified>
				<search_id>106</search_id>
      </search>
      ...
      <search id="117">
        <name>Larry!!!</name>
        <last_run>2012-11-21 10:56:17</last_run>
        <listed>1</listed>
        <creator id="1">Larry Cucumber</creator>
        <modifier id="1">Larry Cucumber</modifier>
        <created>2012-11-21 10:56:17</created>
        <modified>2012-11-21 10:56:17</modified>
				<search_id>117</search_id>
      </search>
    </searches>
  </response>
</ccb_api>
```

### Set Individual Credentials

---

The Set Individual Credentials service will set the username and password of a given individual to the provided values.

#### Service Name

set_individual_credentials

#### Required Parameters

| name     | type                                                                       | notes                          |
| -------- | -------------------------------------------------------------------------- | ------------------------------ |
| id       | integer                                                                    | **Must be sent via HTTP POST** |
| username | string                                                                     | **Must be sent via HTTP POST** |
| password | string *Must be at least six characters and have both letters and numbers* | **Must be sent via HTTP POST** |

#### Optional Parameters

None

#### Example Curl

```
  curl -u user:pass -d "id=48&username=newusername&password=newpassword" "https://yourchurch.ccbchurch.com/api.php?srv=set_individual_credentials"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="set_individual_credentials" name="srv"/>
      <argument value="48" name="id"/>
      <argument value="newusername" name="username"/>
      <argument value="newpassword" name="password"/>
    </parameters>
  </request>
  <response>
    <service>set_individual_credentials</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <individuals count="1">
      <individual id="48">
        <name>Larry Bob</name>
        <login>newusername</login>
        <success>true</success>
      </individual>
    </individuals>
  </response>
</ccb_api>
```

### Significant Events for Individual

---

The Significant Events for Individual service returns a list of all recorded significant events for the specified user.

#### Service Name

individual_significant_events

#### Required Parameters

None

#### Optional Parameters

| name | type    |
| ---- | ------- |
| id   | integer |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=individual_significant_events&id=48"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="individual_significant_events" name="srv"/>
      <argument value="48" name="id"/>
    </parameters>
  </request>
  <response>
    <service>individual_significant_events</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <individuals count="1">
      <individual id="48">
        <name>Larry Bob</name>
        <campus id="1">Church of Cucumbers</campus>
        <significant_events count="1">
          <significant_event id="1">
            <name>High School Graduation</name>
            <date>2013-08-23 00:00:00</date>
            <modifier id="0">System User</modifier>
            <modified>2014-01-28 10:25:37</modified>
          </significant_event>
        </significant_events>
      </individual>
    </individuals>
  </response>
</ccb_api>
```

### Update Individual

---

The Update Individual service will accept form-encoded data representing changes to an existing individual and update the individual in the Church Community Builder system. The service returns the profile of the individual that was updated.

#### Service Name

update_individual

#### Required Parameters

| name          | type    |
| ------------- | ------- |
| individual_id | integer |

#### Optional Parameters

| name                   | type     | notes                                                                                                                                                                                                                                               |
| ---------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| first_name             | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| last_name              | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| middle_name            | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| legal_first_name       | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| sync_id                | integer  | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| other_id               | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| salutation             | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| suffix                 | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| campus_id              | integer  | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| family_position        | string   | **Must be sent via HTTP POST** Must be one of the following: 'h'; 's'; 'c'; 'o', indicating 'head of household', 'spouse', 'child', or 'other'                                                                                                      |
| marital_status         | string   | **Must be sent via HTTP POST** Must be one of the following: 's'; 'm'; 'w'; 'd'; 'p'; ' ', indicating 'single', 'married', 'widowed', 'divorced', 'separated', or 'not selected'                                                                    |
| gender                 | string   | **Must be sent via HTTP POST** Must be either 'M' or 'F', indicating either Male or Female                                                                                                                                                          |
| birthday               | datetime | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| anniversary            | datetime | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| deceased               | datetime | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| membership_date        | datetime | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| membership_end         | datetime | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| membership_type_id     | integer  | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| giving_number          | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| email                  | string   | **Must be sent via HTTP POST** Must be a valid email                                                                                                                                                                                                |
| mailing_street_address | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| mailing_city           | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| mailing_state          | string   | **Must be sent via HTTP POST** Must be two or three uppercase characters                                                                                                                                                                            |
| mailing_zip            | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| mailing_country        | string   | **Must be sent via HTTP POST** Must be two uppercase characters                                                                                                                                                                                     |
| home_street_address    | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| home_city              | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| home_state             | string   | **Must be sent via HTTP POST** Must be two or three uppercase characters                                                                                                                                                                            |
| home_zip               | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| home_country           | string   | **Must be sent via HTTP POST** Must be two uppercase characters                                                                                                                                                                                     |
| work_street_address    | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| work_city              | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| work_state             | string   | **Must be sent via HTTP POST** Must be two or three uppercase characters                                                                                                                                                                            |
| work_zip               | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| work_country           | string   | **Must be sent via HTTP POST** Must be two uppercase characters                                                                                                                                                                                     |
| work_title             | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| other_street_address   | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| other_city             | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| other_state            | string   | **Must be sent via HTTP POST** Must be two or three uppercase characters                                                                                                                                                                            |
| other_zip              | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| other_country          | string   | **Must be sent via HTTP POST** Must be two uppercase characters                                                                                                                                                                                     |
| contact_phone          | string   | **\*DEPRECATED** If you pass contact_phone and do not pass mobile_phone and the user does not currently have a mobile_phone set, it will populate the mobile_phone. If you pass both, contact_phone will be ignored. **Must be sent via HTTP POST** |
| home_phone             | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| work_phone             | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| mobile_phone           | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| mobile_carrier         | int      | **Must be sent via HTTP POST** If not a valid id will be set to zero. Use mobile_carrier_list service to get values.                                                                                                                                |
| emergency_phone        | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| emergency_contact_name | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| allergies              | string   | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| confirmed_no_allergies | boolean  | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| baptized               | boolean  | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |
| udf*text*#             | string   | # is a number between 1--12 inclusively, **Must be sent via HTTP POST**                                                                                                                                                                             |
| udf*date*#             | datetime | # is a number between 1--6 inclusively, **Must be sent via HTTP POST**                                                                                                                                                                              |
| udf*pulldown*#         | integer  | # is a number between 1--6 inclusively, **Must be sent via HTTP POST**                                                                                                                                                                              |
| modifier_id            | integer  | **Must be sent via HTTP POST**                                                                                                                                                                                                                      |

#### Example Curl

```
  curl -u user:pass -d "first_name=Larry&last_name=Boy&family_position=h&gender=m&birthday=2%2F12%2F1966&anniversary=May+6%2C+1989&membership_date=2010-01-01&email=ken%40test.net&mailing_street_address=12265+Oracle+Blvd%2C+Suite+105&mailing_city=Colorado+Springs&mailing_state=CO&mailing_zip=80921&mailing_country=US&mobile_phone=719-555-2888" "https://yourchurch.ccbchurch.com/api.php?srv=update_individual&individual_id=2412"
```

#### Example XML

See individual_profile_from_id

### Update Individual Fit

---

The Update Individual Fit service allows the user to update the individual fit for a single individual. When setting the fit for an individual all previous values will be removed and only those passed in will be set. In the example below if the individual had passions or personality styles previous set, those will be remove after the service is run.

#### Service Name

update_individual_fit

#### Required Parameters

| name          | type |
| ------------- | ---- |
| individual_id | int  |

#### Optional Parameters

| name              | type      |
| ----------------- | --------- |
| spiritual_gifts   | int array |
| passions          | int array |
| abilities         | int array |
| personality_style | int       |

#### Example Curl

```
  curl -u user:pass "https://yourchurch.ccbchurch.com/api.php?srv=update_individual_fit&individual_id=1" -d "spiritual_gifts[1]=1&abilities[1]=1&abilities[2]=4"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
   <request>
      <parameters>
         <argument value="individual_fit" name="srv"/>
      </parameters>
   </request>
   <response>
      <service>individual_profiles</service>
      <service_action>execute</service_action>
      <availability>public</availability>
      <individuals count="1">
        <individual id="1">
         <individuals count="1">
          <individual id="1">
            <abilities count="2">
              <ability id="1">Skill: Medical</ability>
              <ability id="4">Skill: Education</ability>
            </abilities>
            <spiritual_gifts count="1">
              <spiritual_gift id="1">Administration</spiritual_gift>
            </spiritual_gifts>
            <passions count="0"></passions>
        </individual>
      </individuals>
   </response>
</ccb_api>
```

### Valid Individuals

---

The Valid Individuals service returns a list of all individuals in the Church Community Builder system.

#### Service Name

valid_individuals

#### Required Parameters

None

#### Optional Parameters

None

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=valid_individuals"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
     <parameters>
        <argument value="valid_individuals" name="srv"/>
     </parameters>
  </request>
  <valid_individuals count="58">
    <valid_individual id="1">
      <active>true</active>
      <creator id="1">Larry Cucumber</creator>
      <modifier id="1">Larry Cucumber</modifier>
      <created>2003-11-26 13:03:43</created>
      <modified>2014-01-07 12:02:31</modified>
    </valid_individual>
    ...
    <valid_individual id="62">
      <active>true</active>
      <creator id="1">Larry Cucumber</creator>
      <modifier id="0">System User</modifier>
      <created>2013-04-08 06:50:44</created>
      <modified>2013-07-23 03:28:18</modified>
    </valid_individual>
  </valid_individuals>
</ccb_api>
```

## Lookup Table Services

Several services are provided to get the contents of different lookup value lists from the Church Community Builder system. These lookup values can come from the following areas:

-   Group Types
-   Group Meeting Days
-   Group Meeting Times
-   User Defined Fields for Groups
-   COA Categories
-   Group Departments
-   Group Areas of Town

With each service you can perform a list, detail, update, or insert. For example you can get the listing of all school grades, the detail of a single school grade, update an school grade, or insert a new school grade. The service calls for these would be school_grade_list, school_grade_detail, school_grade_update, school_grade_insert. The complete list of services is listed below, with each requiring one of the following to be appended to create a valid service: \_list, \_detail, \_update, or \_insert (for example school_grade is not a valid service). If you pass in an invalid id into any of the \_update services, the response will contain empty elements instead of an error.

-   ability
-   activity
-   area
-   church_service
-   event_grouping
-   gift
-   group_grouping
-   group_type
-   how_joined_church
-   how_they_heard
-   meet_day
-   meet_time
-   membership_type
-   passion
-   reason_left_church
-   school
-   school_grade
-   significant_event
-   spiritual_maturity
-   style
-   transaction_grouping
-   udf_grp_pulldown_1
-   udf_grp_pulldown_2
-   udf_grp_pulldown_3
-   udf_ind_pulldown_1
-   udf_ind_pulldown_2
-   udf_ind_pulldown_3
-   udf_ind_pulldown_4
-   udf_ind_pulldown_5
-   udf_ind_pulldown_6
-   udf_resource_pulldown_1

#### Example Curl

##### Detail

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=ability_detail&ability_id=9"
```

##### Insert

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=ability_insert&name=newValue&order_by=3"
```

##### List

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=ability_list"
```

##### Update

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=ability_update&ability_id=9&name=BOOKKEEPING"
```

#### Example XML

##### Detail

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="ability_detail" name="srv"/>
      <argument value="9" name="ability_id"/>
    </parameters>
  </request>
  <response>
    <service>ability_detail</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <abilities count="1">
      <ability id="9">
        <name>Pro - Bookkeeping</name>
        <order_by>9</order_by>
        <owner id="1">
          <first_name>Larry</first_name>
          <last_name>Cucumber</last_name>
          <full_name>Larry Cucumber</full_name>
          <email>test@test.com</email>
          <phones>
            <phone type="mobile">0123456789</phone>
          </phones>
        </owner>
        <editable>1</editable>
        <listed>1</listed>
        <creator id="0">System User</creator>
        <modifier id="0">System User</modifier>
        <created>0000-00-00 00:00:00</created>
        <modified>2001-12-06 23:29:49</modified>
      </ability>
    </abilities>
  </response>
</ccb_api>
```

##### Insert

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
     <parameters>
        <argument value="ability_insert" name="srv"/>
        <argument value="YrL7FcOKl37JFprC" name="name"/>
        <argument value="3" name="order_by"/>
     </parameters>
  </request>
  <response>
    <service>ability_insert</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <abilities count="1">
      <ability id="144">
        <name>YrL7FcOKl37JFprC</name>
        <order_by>3</order_by>
        <owner id="1">
          <first_name>Larry</first_name>
          <last_name>Cucumber</last_name>
          <full_name>Larry Cucumber</full_name>
          <email>test@test.com</email>
          <phones>
            <phone type="mobile">0123456789</phone>
          </phones>
        </owner>
        <editable>1</editable>
        <listed>1</listed>
        <creator id="0">System User</creator>
        <modifier id="0">System User</modifier>
        <created>2014-01-28 10:25:29</created>
        <modified>2014-01-28 10:25:29</modified>
      </ability>
    </abilities>
  </response>
</ccb_api>
```

##### List

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
   <request>
      <parameters>
        <argument value="ability_list" name="srv"/>
      </parameters>
   </request>
   <response>
      <service>ability_list</service>
      <service_action>execute</service_action>
      <availability>public</availability>
      <items count="144">
        <item>
          <item_id type="ability">1</item_id>
          <id>1</id>
          <name>Pro - Mental Health</name>
          <order>1</order>
        </item>
        ...
        <item>
          <item_id type="ability">143</item_id>
          <id>143</id>
          <name>Work With - Hospital Visits</name>
          <order>143</order>
        </item>
      </items>
   </response>
</ccb_api>
```

##### Update

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="ability_update" name="srv"/>
      <argument value="9" name="ability_id"/>
      <argument value="BOOKKEEPING" name="name"/>
    </parameters>
  </request>
  <response>
    <service>ability_update</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <abilities count="1">
      <ability id="9">
        <name>BOOKKEEPING</name>
        <order_by>9</order_by>
        <owner id="1">
          <first_name>Larry</first_name>
          <last_name>Cucumber</last_name>
          <full_name>Larry Cucumber</full_name>
          <email>test@test.com</email>
          <phones>
            <phone type="mobile">0123456789</phone>
          </phones>
        </owner>
        <editable>1</editable>
        <listed>1</listed>
        <creator id="0">System User</creator>
        <modifier id="0">System User</modifier>
        <created>0000-00-00 00:00:00</created>
        <modified>2014-01-28 10:25:33</modified>
      </ability>
    </abilities>
  </response>
</ccb_api>
```

## Process Services

The Church Community Builder Process services allow you to have access to your Process information. This information can be used as you wish on your website or in other applications in use across your church.

### Process List

---

The Process List service allows you to retrieve a list of all your Processes, optionally filtered by campus or a specific date modified since.

#### Service Name

process_list

#### Required Parameters

None

#### Optional Parameters

| name           | type     |
| -------------- | -------- |
| archived       | boolean  |
| campus_id      | integer  |
| modified_since | datetime |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=process_list&campus_id=1"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
     <request>
          <parameters>
               <argument value="process_list" name="srv"/>
               <argument value="1" name="campus_id"/>
          </parameters>
     </request>
     <response>
          <service>process_list</service>
          <service_action>execute</service_action>
          <availability>public</availability>
          <processes count="24">
               <process id="58">
                    <name>33rd Visit Follow-Up Process</name>
                    <campus id="1">Stable</campus>
                    <owner id="91">Master Admin</owner>
                    <hidden>true</hidden>
                    <managers>
                         <manager id="630">Jacob Luddite</manager>
                         <manager id="647">Jay Guliano</manager>
                    </managers>
                    <queues>
                         <queue id="264" order_by="1">no 4</queue>
                         <queue id="266" order_by="2">no 5</queue>
                         <queue id="199" order_by="3">Call to Schedule a Coffee Visit</queue>
                    </queues>
                    <creator id="91">Master Admin</creator>
                    <modifier id="91">Master Admin</modifier>
                    <created>2011-09-26 16:24:31</created>
                    <modified>2012-10-19 14:36:36</modified>
               </process>
               ...
               <process id="55">
                    <name>Volunteers for Sushi O!</name>
                    <campus id="1">Stable</campus>
                    <owner id="91">Master Admin</owner>
                    <hidden>false</hidden>
                    <managers>
                         <manager id="630">Jacob Luddite</manager>
                    </managers>
                    <queues>
                         <queue id="185" order_by="1">Member contact</queue>
                         <queue id="186" order_by="2">Follow-up / 2nd Contact</queue>
                         <queue id="187" order_by="3">Volunteer Placement</queue>
                         <queue id="188" order_by="4">Volunteer Training</queue>
                    </queues>
                    <creator id="91">Master Admin</creator>
                    <modifier id="91">Master Admin</modifier>
                    <created>2011-09-09 14:57:30</created>
                    <modified>2011-09-09 14:59:25</modified>
               </process>
          </processes>
     </response>
</ccb_api>
```

### Process Managers

---

The Process Managers service allows you to retrieve a list of all the Process Managers and the Processes they manage, optionally filtered for a specific manager.

#### Service Name

process_managers

#### Required Parameters

None

#### Optional Parameters

| name | type    |
| ---- | ------- |
| id   | integer |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=process_managers&id=1"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="process_managers" name="srv"/>
      <argument value="1" name="id"/>
    </parameters>
  </request>
  <response>
    <managers count="1">
      <manager id="1">
        <name>Larry Cucumber</name>
        <processes>
          <process id="2">New Guest Followup</process>
        </processes>
      </manager>
    </managers>
  </response>
</ccb_api>
```

### Queue Individuals

---

The Queue Individuals service allows you to retrieve a list of all the individuals in a given Process, optionally filtered for status within the Queue.

#### Service Name

queue_individuals

#### Required Parameters

| name | type    |
| ---- | ------- |
| id   | integer |

#### Optional Parameters

| name   | type   | notes                                                                        |
| ------ | ------ | ---------------------------------------------------------------------------- |
| status | string | Must be one of the following: 'waiting'; 'in-process'; 'done'; 'not-started' |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=queue_individuals&id=18"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="queue_individuals" name="srv"/>
      <argument value="18" name="id"/>
    </parameters>
  </request>
  <response>
    <individuals count="5">
      <individual id="57">
        <name>Bob Ross</name>
        <manager id="0"></manager>
        <status id="3">Not-Started</status>
        <creator id="1">Larry Cucumber</creator>
        <modifier id="1">Larry Cucumber</modifier>
      </individual>
      ...
      <individual id="1">
        <name>Bob Tom</name>
        <manager id="1">Larry Cucumber</manager>
        <status id="2">Done</status>
        <creator id="1">Larry Cucumber</creator>
        <modifier id="1">Larry Cucumber</modifier>
      </individual>
    </individuals>
  </response>
</ccb_api>
```

### Queue List

---

The Queue List service allows you to retrieve a list of all the Queues for a given Process, optionally filtered for those having been created or modified since a specific date.

#### Service Name

queue_list

#### Required Parameters

| name | type    |
| ---- | ------- |
| id   | integer |

#### Optional Parameters

| name           | type     |
| -------------- | -------- |
| modified_since | datetime |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=queue_list&id=2"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="queue_list" name="srv"/>
      <argument value="2" name="id"/>
    </parameters>
  </request>
  <queues count="7">
    <queue id="18">
      <name>1. Thank-You Letter</name>
      <description>This letter is sent by our volunteer letter team to thank the new guest for attending our church services, encouraging them to return  and providing information on our service schedule.</description>
      <process id="2">New Guest Followup</process>
      <order>1</order>
      <managers/>
      <creator id="1">Larry Cucumber</creator>
      <modifier id="1">Larry Cucumber</modifier>
      <created>2007-08-14 10:19:40</created>
      <modified>2011-09-20 08:08:01</modified>
    </queue>
    ...
    <queue id="24">
      <name>7. Outreach Coordinator Review</name>
      <description>The Outreach Coordinator will review all the contact made and any notes added to determine if any additional contact should be made  or the guest should be added to another process</description>
      <process id="2">New Guest Followup</process>
      <order>30</order>
      <managers/>
      <creator id="1">Larry Cucumber</creator>
      <modifier id="1">Larry Cucumber</modifier>
      <created>2007-08-14 10:40:53</created>
      <modified>2010-07-27 12:55:10</modified>
    </queue>
  </queues>
</ccb_api>
```

### Queue Managers

---

#### Service Name

queue_managers

#### Required Parameters

None

#### Optional Parameters

| name       | type    |
| ---------- | ------- |
| process_id | integer |
| manager_id | integer |
| queue_id   | integer |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=queue_managers&manager_id=48"s
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="queue_managers" name="srv"/>
      <argument value="48" name="manager_id"/>
    </parameters>
  </request>
  <response>
    <managers count="0">
      <managers id="48">
        <name>Master Adama</name>
        <processes count="17">
          <process id="1">
            <name>Youth Involvement!jfklewjeklqjrklqjrlkqwjeqlkwjeql</name>
            <queues count="1">
              <queue id="8">FOLLOW-UP GROWTH! (CHOOSE FROM SELECTIONS BELOW)</queue>
            </queues>
          </process>
          ...
          <process id="101">
            <name>9847</name>
            <queues count="16">
              <queue id="8">FOLLOW-UP GROWTH! (CHOOSE FROM SELECTIONS BELOW)</queue>
              <queue id="11">Visitor Follow Up</queue>
              <queue id="27">Way TOo many tasks edit</queue>
              <queue id="31">Amy' does everything</queue>
              <queue id="35">Youth Check Up Call</queue>
              <queue id="1002">101 Class Completed Yeah</queue>
              <queue id="1008">First Time Visitor Letter</queue>
              <queue id="1009">Invite to Small Group</queue>
              <queue id="1011">401 Seminar Completed</queue>
              <queue id="1022">Make Second Phone Call</queue>
              <queue id="1025">Call #1- Involvement Focused</queue>
              <queue id="1050">Step 1</queue>
              <queue id="1053">Prayer Request</queue>
              <queue id="1122">House Cleaning</queue>
              <queue id="1129">Step 1</queue>
              <queue id="1323">9847 queue</queue>
            </queues>
          </process>
        </processes>
      </managers>
    </managers>
  </response>
</ccb_api>
```

## Public Web Tools

The Church Community Builder Public Web Tools API allows you to extend your public Church Community Builder calendar to other websites, build a kiosk application that lists your small groups, or create other tools you may desire.

### Public Calendar Listing

---

The Public Calendar Listing service will take a range of two dates as input and produce a listing of all approved public calendar events occurring in the given date range. If the two dates are identical, events for the given day will be returned.

#### Service Name

public_calendar_listing

#### Required Parameters

| name       | type     |
| ---------- | -------- |
| date_start | datetime |

#### Optional Parameters

| name     | type     |
| -------- | -------- |
| date_end | datetime |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=public_calendar_listing&date_start=2008-11-25"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="public_calendar_listing" name="srv"/>
      <argument value="2008-11-25" name="date_start"/>
    </parameters>
  </request>
  <response>
    <items count="1">
      <item>
        <date>2008-11-25</date>
        <event_name ccb_id="586">a really fun event</event_name>
        <event_description></event_description>
        <start_time>00:00:00</start_time>
        <end_time>00:15:00</end_time>
        <event_duration>15</event_duration>
        <event_type>Registration Required</event_type>
        <location></location>
        <group_name ccb_id="8">Awesome Group For Fun People</group_name>
        <group_type>Life Group</group_type>
        <grouping_name>FUN GROUPING</grouping_name>
        <leader_name ccb_id="841">Larry Boy</leader_name>
        <leader_phone>(123) 938-5555</leader_phone>
        <leader_email>lboy@test.com</leader_email>
      </item>
    </items>
  </response>
</ccb_api>
```

### Campus List

---

The Campus List service will return a list of campuses.

#### Service Name

campus_list

#### Required Parameters

none

#### Optional Parameters

none

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=campus_list"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="campus_list" name="srv"/>
    </parameters>
  </request>
  <response>
    <service>campus_list</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <campuses count="9">
      <campus id="1">
        <name>Church of Cucumbers</name>
        <active>1</active>
        <creator id="0">System User</creator>
        <modifier id="1">System User</modifier>
        <created>2010-05-07 15:30:41</created>
      </campus>
      ...
      <campus id="12">
        <name>Mountain</name>
        <active>1</active>
        <creator id="1">System User</creator>
        <modifier id="1">System User</modifier>
        <created>2012-11-08 13:47:12</created>
      </campus>
    </campuses>
  </response>
</ccb_api>
```

### Campus Profile

---

The Campus Profile service returns campus details for the ID provided.

#### Service Name

campus_profile

#### Required Parameters

| name | type    |
| ---- | ------- |
| id   | integer |

#### Optional Parameters

none

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=campus_profile&id=1"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="campus_profile" name="srv"/>
      <argument value="1" name="id"/>
    </parameters>
  </request>
  <response>
    <service></service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <campus id="1">
      <name>Church of Cucumbers</name>
      <addresses>
        <address type="mailing">
          <name></name>
          <street_address></street_address>
          <city></city>
          <state></state>
          <zip></zip>
          <country code=""></country>
          <line_1></line_1>
          <line_2></line_2>
        </address>
        <address type="meet_at">
          <name>Your Church Name</name>
          <street_address>Your Address</street_address>
          <city>City</city>
          <state></state>
          <zip></zip>
          <country code=""></country>
          <line_1>Your Address</line_1>
          <line_2>City</line_2>
        </address>
      </addresses>
      <email></email>
      <phones>
        <phone type="mobile">(555) 555-5555</phone>
      </phones>
      <campus_group id="7">
        <name>All members of CC</name>
        <url>https://yourchurch.ccbchurch.com/group_detail.php?group_id=7</url>
      </campus_group>
      <locale>en_US</locale>
      <timezone>America/Denver</timezone>
      <currency>dollar</currency>
      <active>1</active>
      <creator id="0">System User</creator>
      <modifier id="1">System User</modifier>
      <created>2010-05-07 15:30:41</created>
    </campus>
  </response>
</ccb_api>
```

### Custom Field Label Listing

---

The Custom Field Label Listing service returns a listing of all custom field labels defined in the Church Community Builder system.

#### Service Name

custom_field_labels

#### Required Parameters

none

#### Optional Parameters

none

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=custom_field_labels"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="custom_field_labels" name="srv"/>
    </parameters>
  </request>
  <response>
    <service>custom_field_labels</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <custom_fields count="28">
      <custom_field>
        <name>udf_ind_text_1</name>
        <label></label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_text_2</name>
        <label></label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_text_3</name>
        <label></label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_text_4</name>
        <label></label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_text_5</name>
        <label></label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_text_6</name>
        <label></label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_text_7</name>
        <label></label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_text_8</name>
        <label></label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_text_9</name>
        <label></label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_text_10</name>
        <label></label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_text_11</name>
        <label></label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_text_12</name>
        <label></label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_date_1</name>
        <label></label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_date_2</name>
        <label></label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_date_3</name>
        <label></label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_date_4</name>
        <label></label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_date_5</name>
        <label></label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_date_6</name>
        <label></label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_pulldown_1</name>
        <label>untitled</label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_pulldown_2</name>
        <label>untitled</label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_pulldown_3</name>
        <label>untitled</label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_pulldown_4</name>
        <label>untitled</label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_pulldown_5</name>
        <label>untitled</label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_ind_pulldown_6</name>
        <label>untitled</label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_grp_pulldown_1</name>
        <label>untitled</label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_grp_pulldown_2</name>
        <label>untitled</label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_grp_pulldown_3</name>
        <label>untitled</label>
        <admin_only>true</admin_only>
      </custom_field>
      <custom_field>
        <name>udf_resource_pulldown_1</name>
        <label></label>
        <admin_only>false</admin_only>
      </custom_field>
    </custom_fields>
  </response>
</ccb_api>
```

### Group Finder

---

The Group Finder service allows you to pass in a set of criteria and returns a listing of the groups that best match the criteria. It is important to note that only active non-administrative groups that are listed and available via public search will be returned. These settings can be found in the application by editing group settings and going to the options tab. Interaction Type must not be set to 'Administrative', Listed must be checked, Public Search must be checked, and Group must be active.

#### Service Name

group_search

#### Required Parameters

none

#### Optional Parameters

| name                   | type    |
| ---------------------- | ------- |
| area_id                | integer |
| campus_id              | integer |
| childcare              | boolean |
| meet_day_id            | integer |
| meet_time_id           | integer |
| department_id          | integer |
| type_id                | integer |
| udf_pulldown_1_id      | integer |
| udf_pulldown_2_id      | integer |
| udf_pulldown_3_id      | integer |
| limit_records_start    | integer |
| limit_records_per_page | integer |
| order_by_1             | string  |
| order_by_2             | string  |
| order_by_3             | string  |
| order_by_1_sort        | string  |
| order_by_2_sort        | string  |
| order_by_3_sort        | string  |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=group_search"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="group_search" name="srv"/>
    </parameters>
  </request>
  <response>
    <service>group_search</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <items count="1">
      <item>
        <item_id type="groups">9</item_id>
        <id>9</id>
        <name>**Sweet Tea Junkies**</name>
        <group_type_name>Interest</group_type_name>
        <grouping_name>Adult Ministries</grouping_name>
        <area_name ccb_id="2">North</area_name>
        <meet_day_name>Monday</meet_day_name>
        <meet_time_name>Lunch</meet_time_name>
        <description>We like a little tea with our sugar. **DO NOT TOUCH**</description>
        <status_id>1</status_id>
        <messaging_type>Interact</messaging_type>
        <membership_type>Open</membership_type>
        <owner_name ccb_id="49">Group Leader</owner_name>
        <owner_email_primary>larryboy@test.com</owner_email_primary>
      </item>
    </items>
  </response>
</ccb_api>
```

### Import Online Gifts

---

The Import Online Gifts service allows a batch of gifts to be entered directly into the Church Community Builder system. This service does **NOT** process any payments. If an individual id of '0' is provided the service will attempt to match the individual gift to an individual using the contact information (first name, last name, address and email address).

#### Service Name

import_online_gifts

#### Required Parameters

| name                                | type        | notes                                                                                                                                |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| online_gift merchant-transaction-id | string[50]  |
| merchant_authorization_code         | string[10]  |
| merchant_process_date               | datetime    |
| payment_method_type                 | string[20]  | Valid inputs: '', 'Other', 'MC', 'VISA','AMEX', 'DISC'                                                                               |
| campus_id                           | integer     |
| individual id                       | integer     | If the individual id is not available, '0' is a valid parameter value.                                                               |
| first_name                          | string[20]  |
| last_name                           | string[20]  |
| email                               | string[100] |
| street_address                      | string[150] |
| city                                | string[30]  |
| state                               | string[3]   |
| zip                                 | string[10]  |
| phone                               | string[50]  | The type="mobile" is not required. However, the type is provided in the response to distinguish what type of phone number is stored. |
| coa_id                              | integer     |
| amount                              | decimal     |

#### Optional Parameters

| name                   | type        | notes                                                                                        |
| ---------------------- | ----------- | -------------------------------------------------------------------------------------------- |
| merchant_name          | string[50]  | Unique merchant name used for individual matching.                                           |
| merchant_individual_id | string[50]  | Used to associate the individual in the application to the merchant information.             |
| merchant_notes         | string[100] |
| merchant_status        | string[10]  | Valid inputs: '', 'Completed', 'Paid', 'Processing', 'Settled', 'Voided'\                    |
| merchant_process_date  | datetime    | If a merchant_process_date value is provided the merchant_status must be 'Settled'.\         |
| merchant_process_id    | string[50]  | \                                                                                            |
| merchant_schedule_id   | integer     | \                                                                                            |
| payment_method         | string[20]  | Valid inputs: '', 'API', 'API - ACH', 'API - CCard',                                         |
| transaction_date       | datetime    | Date of the transaction. If null, the current date is assumed. Future dates are not allowed. |

#### Example Curl

```
  curl -u user:pass -F filedata=@your_local_file_location "https://yourchurch.ccbchurch.com/api.php?srv=import_online_gifts"
```

#### Example Input XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <online_gifts>
    <online_gift merchant-transaction-id="fc6bb535-7408-46b7-8cb3-32340d8c7327">
      <merchant_name>Merchant's Name</merchant_name>
      <merchant_individual_id>512345612321</merchant_individual_id>
      <merchant_authorization_code>00654F</merchant_authorization_code>
      <merchant_notes></merchant_notes>
      <merchant_status>Settled</merchant_status>
      <merchant_process_date>2015-10-05 01:15:23</merchant_process_date>
      <merchant_process_id></merchant_process_id>
      <merchant_schedule_id></merchant_schedule_id>
      <payment_method>API - CCard</payment_method>
      <payment_method_type>VISA</payment_method_type>
      <campus_id>1</campus_id>
      <individual id="0">
        <first_name>Brett</first_name>
        <last_name>Smith</last_name>
        <email>brett@test.com</email>
        <address>
          <street_address>231 Nowhere</street_address>
          <city>City</city>
          <state>CO</state>
          <zip>12345</zip>
          <country code="US">United States</country>
        </address>
        <phones>
          <phone type="mobile">9876543210</phone>
        </phones>
      </individual>
      <gifts>
        <gift>
          <coa_id>15</coa_id>
          <amount>25.00</amount>
        </gift>
      </gifts>
    </online_gift>
    <online_gift merchant-transaction-id="c8eac3c6-6f16-4cd7-9fc1-4d8e532fe237">
      <merchant_name>Merchant's Name</merchant_name>
      <merchant_individual_id>654820374196</merchant_individual_id>
      <merchant_authorization_code>00354G</merchant_authorization_code>
      <merchant_notes></merchant_notes>
      <merchant_status></merchant_status>
      <merchant_process_date></merchant_process_date>
      <merchant_process_id></merchant_process_id>
      <merchant_schedule_id></merchant_schedule_id>
      <payment_method>API - CCard</payment_method>
      <payment_method_type>Other</payment_method_type>
      <campus_id>1</campus_id>
      <individual id="1354">
        <first_name>Spike</first_name>
        <last_name>Smith</last_name>
        <email>spike@test.com</email>
        <address>
          <street_address>123 Any Street</street_address>
          <city>City</city>
          <state>CO</state>
          <zip>12345</zip>
          <country code="US">United States</country>
        </address>
        <phones>
          <phone type="mobile">6549873210</phone>
        </phones>
      </individual>
      <gifts>
        <gift>
          <coa_id>31</coa_id>
          <amount>25.00</amount>
        </gift>
        <gift>
          <coa_id>15</coa_id>
          <amount>10.00</amount>
        </gift>
      </gifts>
    </online_gift>
    <online_gift merchant-transaction-id="fc6bb535-7408-46b7-8cb3-32340d8c7327">
      <merchant_name>Merchant's Name</merchant_name>
      <merchant_individual_id>512345612321</merchant_individual_id>
      <merchant_authorization_code>00654F</merchant_authorization_code>
      <merchant_notes></merchant_notes>
      <merchant_status></merchant_status>
      <merchant_process_date></merchant_process_date>
      <merchant_process_id></merchant_process_id>
      <merchant_schedule_id></merchant_schedule_id>
      <payment_method>API - ACH</payment_method>
      <payment_method_type></payment_method_type>
      <campus_id>1</campus_id>
      <individual id="0">
        <first_name>Becky</first_name>
        <last_name>Smith</last_name>
        <email>becky@test.com</email>
        <address>
          <street_address>815 Somewhere</street_address>
          <city>City</city>
          <state>CO</state>
          <zip>12345</zip>
          <country code="US">United States</country>
        </address>
        <phones>
          <phone type="mobile">9876585210</phone>
        </phones>
      </individual>
      <gifts>
        <gift>
          <coa_id>15</coa_id>
          <amount>15.00</amount>
        </gift>
      </gifts>
    </online_gift>
  </online_gifts>
</ccb_api>
```

#### Example Output XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
     <request>
          <parameters>
               <argument value="import_online_gifts" name="srv"/>
          </parameters>
     </request>
     <response>
          <service></service>
          <service_action>execute</service_action>
          <availability>public</availability>
          <online_gifts count="3">
               <online_gift id="16577" merchant_transaction_id="fc6bb535-7408-46b7-8cb3-32340d8c7327">
                    <confirmation_code>DXM</confirmation_code>
                    <amount>25.00</amount>
                    <payment_method>API - CCard</payment_method>
                    <payment_method_type>VISA</payment_method_type>
                    <individual id="0">
                         <first_name>Brett</first_name>
                         <last_name>Smith</last_name>
                         <email>brett@test.com</email>
                         <address>
                              <street_address>231 Nowhere</street_address>
                              <city>City</city>
                              <state>CO</state>
                              <zip>12345</zip>
                              <phone type="mobile">9876543210</phone>
                         </address>
                    </individual>
                    <gifts>
                         <gift>
                              <coa_id>15</coa_id>
                              <amount>25.00</amount>
                         </gift>
                    </gifts>
               </online_gift>
               <online_gift id="16578" merchant_transaction_id="c8eac3c6-6f16-4cd7-9fc1-4d8e532fe237">
                    <confirmation_code>T85</confirmation_code>
                    <amount>35.00</amount>
                    <payment_method>API - CCard</payment_method>
                    <payment_method_type>Other</payment_method_type>
                    <individual id="1354">
                         <first_name>Spike</first_name>
                         <last_name>Smith</last_name>
                         <email>spike@test.com</email>
                         <address>
                              <street_address>123 Any Street</street_address>
                              <city>City</city>
                              <state>CO</state>
                              <zip>12345</zip>
                              <phone type="mobile">6549873210</phone>
                         </address>
                    </individual>
                    <gifts>
                         <gift>
                              <coa_id>31</coa_id>
                              <amount>25.00</amount>
                         </gift>
                         <gift>
                              <coa_id>15</coa_id>
                              <amount>10.00</amount>
                         </gift>
                    </gifts>
               </online_gift>
               <online_gift id="16579" merchant_transaction_id="fc6bb535-7408-46b7-8cb3-32340d8c7327">
                    <confirmation_code>J8B</confirmation_code>
                    <amount>15.00</amount>
                    <payment_method>API - ACH</payment_method>
                    <payment_method_type></payment_method_type>
                    <individual id="0">
                         <first_name>Becky</first_name>
                         <last_name>Smith</last_name>
                         <email>becky@test.com</email>
                         <address>
                              <street_address>815 Somewhere</street_address>
                              <city>City</city>
                              <state>CO</state>
                              <zip>12345</zip>
                              <phone type="mobile">9876585210</phone>
                         </address>
                    </individual>
                    <gifts>
                         <gift>
                              <coa_id>15</coa_id>
                              <amount>15.00</amount>
                         </gift>
                    </gifts>
               </online_gift>
          </online_gifts>
     </response>
</ccb_api>
```

### Mobile Carrier Listing

---

The Mobile Carrier Listing service returns a listing of all mobile carriers defined in the Church Community Builder system along with the email domain used by the carrier.

#### Service Name

mobile_carrier_list

#### Required Parameters

none

#### Optional Parameters

none

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=mobile_carrier_list"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="mobile_carrier_list" name="srv"/>
    </parameters>
  </request>
  <response>
    <service>mobile_carrier_list</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <mobile_carriers count="16">
      <mobile_carrier id="1">
        <name>Alltel</name>
        <email>sms.alltelwireless.com</email>
      </mobile_carrier>
      ...
      <mobile_carrier id="16">
        <name>Cincinnati Bell</name>
        <email>gocbw.com</email>
      </mobile_carrier>
    </mobile_carriers>
  </response>
</ccb_api>
```

### Online Giving

---

The Online Giving service allows a gift to be entered directly into the Church Community Builder system. This service does **NOT** process any payments.

#### Service Name

online_giving_insert_gift

#### Required Parameters

| name            | type    |
| --------------- | ------- |
| coa_category_id | integer |
| individual_id   | integer |
| amount          | decimal |

Note: If the individual_id is not available, '0' is a valid parameter value.

#### Optional Parameters

| name                        | type        | notes                                                                                        |
| --------------------------- | ----------- | -------------------------------------------------------------------------------------------- |
| merchant_name               | string[50]  |
| merchant_transaction_id     | string[75]  |
| merchant_transaction_id     | string[75]  |
| merchant_individual_id      | string[75]  |
| merchant_master_id          | string[75]  |
| merchant_status             | string[20]  |
| merchant_authorization_code | string[10]  |
| merchant_notes              | string[100] |
| merchant_process_date       | datetime    |
| first_name                  | string[20]  |
| last_name                   | string[20]  |
| street_address              | string[150] |
| city                        | string[30]  |
| state                       | string[3]   |
| zip                         | string[10]  |
| email                       | string[100] |
| phone                       | string[50]  |
| campus_id                   | integer     |
| payment_method              | string[20]  | Valid inputs: '', 'API', 'API - ACH', 'API - CCard'\                                         |
| payment_method_type         | string[20]  | Valid inputs: '', 'Other', 'MC', 'VISA', 'AMEX', 'DISC',                                     |
| transaction_date            | datetime    | Date of the transaction. If null, the current date is assumed. Future dates are not allowed. |

#### Example Curl

```
  curl -u user:pass -d "" "https://yourchurch.ccbchurch.com/api.php?srv=online_giving_insert_gift&coa_category_id=8&individual_id=10&amount=12.85&payment_method=API%20-%20CCard&payment_method_type=OTHER"
```

#### Example XML

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument value="online_giving_insert_gift" name="srv"/>
      <argument value="8" name="coa_category_id"/>
      <argument value="10" name="individual_id"/>
      <argument value="12.85" name="amount"/>
      <argument value="API - CCard" name="payment_method"/>
      <argument value="OTHER" name="payment_method_type"/>
    </parameters>
  </request>
  <response>
    <service>online_giving_insert_gift</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <items count="1">
      <item>
        <gift_id>12236</gift_id>
        <confirmation_code>8W5</confirmation_code>
        <amount>12.85</amount>
        <coa_category ccb_id="8">India</coa_category>
        <payment_method_type></payment_method_type>
        <individual ccb_id="10">Larry Boy</individual>
        <email>lboy@test.com</email>
        <address>1 A Street</address>
        <city>CS</city>
        <state>CO</state>
        <postal_code>80907</postal_code>
        <phone_number></phone_number>
        <legacy>1</legacy>
      </item>
    </items>
  </response>
</ccb_api>
```

### Update Custom Field Labels

---

The Update Custom Field Labels service will accept form-encoded data representing changes to the custom field labels and update the labels in the Church Community Builder system.

#### Service Name

update_custom_field_labels

#### Required Parameters

none

#### Optional Parameters

| name                          | type    | notes                                                                    |
| ----------------------------- | ------- | ------------------------------------------------------------------------ |
| udf*text*#\*label             | string  | # is a number between 1--12 inclusively, **must be sent via HTTP POST**\ |
| udf*text*#\*admin             | boolean | # is a number between 1--12 inclusively, **must be sent via HTTP POST**  |
| udf*date*#\*label             | string  | # is a number between 1--6 inclusively, **must be sent via HTTP POST**\  |
| udf*date*#\*admin             | boolean | # is a number between 1--6 inclusively, **must be sent via HTTP POST**   |
| udf*pulldown*#\*label         | string  | # is a number between 1--6 inclusively, **must be sent via HTTP POST**\  |
| udf*pulldown*#\*admin         | boolean | # is a number between 1--6 inclusively, **must be sent via HTTP POST**   |
| udf*group_pulldown*#\*label   | string  | # is a number between 1--3 inclusively, **must be sent via HTTP POST**\  |
| udf*group_pulldown*#\*admin   | boolean | # is a number between 1--3 inclusively, **must be sent via HTTP POST**   |
| udf_resource_pulldown_1_label | string  | **Must be sent via HTTP POST**                                           |
| udf_resource_pulldown_1_admin | boolean | **Must be sent via HTTP POST**                                           |

#### Example Curl

```
  curl -u user:pass -d "udf_text_1_label=Custom+Field+First&udf_text_1_admin=true" "https://yourchurch.ccbchurch.com/api.php?srv=update_custom_field_labels"
```

#### Example XML

see custom_field_labels

# Requests

## Curl

Curl examples coming soon

## Form

Form examples coming soon

# Responses

## Attribute/Parameter Types

| type     | format (technical jargon)                                                                    | example       | additional notes                                                                                                                                                                                              |
| -------- | -------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| datetime | YYYY-MM-DD                                                                                   | 2013--02--25  | Invalid dates may throw unformed errors.                                                                                                                                                                      |
| string   | a sequence of characters                                                                     | 'Hello World' | Size is occasionally limited; denoted by a number between two brackets '[ ]'.                                                                                                                                 |
| integer  | number of the set ℤ = {..., --2, --1, 0, 1, 2, ...}; a group of digits between 0--9 repeated | 123           | Preceding a number with a **_0_** (zero) will specify octal notation (base 8). For example, 0123 is the equivalent to 83 in decimal (base 10). Using ',' (commas) or '.' (periods) may throw unformed errors. |
| char     | a letter, numerical digit, punctuation mark                                                  | H             | Sending more than one character may throw unformed errors.                                                                                                                                                    |
| boolean  | 'true'/'false'                                                                               | true          |
| decimal  | floating point number; a group of digits between 0--9 separated by a '.' (period)            | 12.34         | When sending monetary values, using ',' (commas) or having more than two digits after the '.' (period) may throw unformed errors.                                                                             |

Note: All characters are stored using UTF--8. Integers, decimals, and strings follow PHP 5.3 where possible. Some characters and patterns of characters will be removed in order to sanitize the input. This should not cause issues in majority of use cases.

## XML

All API services will return valid XML on success unless another format is specified.

### Describe Action Result

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument name="srv" value=" " />
      <argument name="describe_api" value="1"/>
    </parameters>
  </request>
  <response>
    <service>api_service_name</service>
    <service_action>describe</service_action>
    <availability>public/private</availability>
    <required_parameters>
      <parameters>
        <parameter type="#parameter_type">parameter_name</parameter>
      </parameters>
    </required_parameters>
    <optional_parameters>
      <parameters>
        <parameter type="#parameter_type">parameter_name</parameter>
      </parameters>
    </optional_parameters>
  </response>
</ccb_api>
```

### Execute Action Result

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument name="srv" value="public_calendar_listing" />
      <argument name=" " value=" " />
      ...
    </parameters>
  </request>
  <response>
    <service>api_service_name</service>
    <service_action>execute</service_action>
    <availability>public</availability>
    <items>
      <item>
        <attribute>value</attribute>
        <attribute_2 attribute_id="1..N">value</attribute_2>
        <attribute_3>&lt;a href=&quot;http://www.google.com&quot; target=&quot;_blank&quot;&gt;clickhere&lt;/a&gt;</attribute_3>
        <attribute_4></attribute_4>
        ...
      </item>
      <item>
        <attribute>value</attribute>
        <attribute_2 attribute_id="1..N">value</attribute_2>
        <attribute_3>&lt;a href=&quot;http://localhost/&quot; target=&quot;_blank&quot;&gt;clickhere&lt;/a&gt;</attribute_3>
        <attribute_4></attribute_4>
        ...
      </item>
    </items>
  </response>
</ccb_api>
```

### Error Response

```
<?xml version="1.0" encoding="UTF-8"?>
<ccb_api>
  <request>
    <parameters>
      <argument name="srv" value=" " />
      <argument name=" " value=" " />
    </parameters>
  </request>
  <response>
    <error number="002" type="Service Permission">Invalid Username or Password.</error>
  </response>
</ccb_api>
```

# Error Handling

We do our best to handle errors gracefully. Below is the list of error codes and their corresponding descriptions.

## Error Codes

| Name                                                     | Number | Type                      | Description                                                                                                                                                      |
| -------------------------------------------------------- | ------ | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API_MESSAGE_INVALID_CONNECTION                           | 001    | Service Access            | The API must be accessed with a secure connection (https).                                                                                                       |
| API_MESSAGE_INVALID_LOGIN_OR_PASSWORD                    | 002    | Service Permission        | Invalid username or password.                                                                                                                                    |
| API_MESSAGE_API_NOT_ACTIVE                               | 003    | Service Permission        | API functionality not active for your organization.                                                                                                              |
| API_MESSAGE_FUNCTIONALITY_PROBLEM                        | 004    | Functionality             | API functionality problem encountered.                                                                                                                           |
| API_MESSAGE_QUERY_LIMIT_REACHED                          | 005    | Service Permission        | Query limit of 'X' reached, please try again tomorrow.                                                                                                           |
| API_MESSAGE_UNKNOWN_PARAMETER                            | 109    | Unknown Element           | 'X' is an unknown parameter.                                                                                                                                     |
| API_MESSAGE_UNKNOWN_SERVICE                              | 100    | Unknown Service           | 'X' is an unknown service.                                                                                                                                       |
| API_MESSAGE_PERMISSION_NO_ACCESS                         | 110    | Service Permission        | You do not have permission to use this service. Please contact your system administrator.                                                                        |
| API_MESSAGE_PERMISSION_NO_PRIVATE_ACCESS                 | 111    | Service Permission        | The 'X' API service is restricted and requires purchased permission. Please contact your sales representative to purchase access to this and other API services. |
| API_MESSAGE_INVALID_PARAMETER                            | 112    | Service Parameter         | The value passed into parameter 'X' was not valid. No entity could be matched to the value.                                                                      |
| API_MESSAGE_INVALID_TABLE                                | 201    | Invalid Table Name        | Invalid table name 'X' specified.                                                                                                                                |
| API_MESSAGE_REQUIRED_PARAMETER_INVALID                   | 202    | Service Parameter         | The parameter 'X' was invalid.                                                                                                                                   |
| API_MESSAGE_REQUIRED_PARAMETER_INVALID_BOOLEAN           | 203    | Service Parameter         | The parameter 'X' must be a boolean value [ 1 or 0 ].                                                                                                            |
| API_MESSAGE_REQUIRED_PARAMETER_INVALID_DECIMAL           | 204    | Service Parameter         | The parameter 'X' must be a decimal value.                                                                                                                       |
| API_MESSAGE_REQUIRED_PARAMETER_INVALID_EXCEED_MAX_LENGTH | 205    | Service Parameter         | The parameter 'X' exceeded the maximum length of 'Y'.                                                                                                            |
| API_MESSAGE_REQUIRED_PARAMETER_INVALID_MONEY             | 206    | Service Parameter         | The parameter 'X' must be in a valid money format.                                                                                                               |
| API_MESSAGE_REQUIRED_PARAMETER_INVALID_NUMBER            | 207    | Service Parameter         | The parameter 'X' must be numeric.                                                                                                                               |
| API_MESSAGE_REQUIRED_PARAMETER_INVALID_DATETIME          | 214    | Service Parameter         | The parameter 'X' must be a properly formatted valid date.                                                                                                       |
| API_MESSAGE_REQUIRED_PARAMETER_CHAR                      | 215    | Service Parameter         | The parameter 'X' must be only one character.                                                                                                                    |
| API_MESSAGE_REQUIRED_PARAMETER_MISSING                   | 208    | Service Parameter         | The parameter 'X' is missing.                                                                                                                                    |
| API_MESSAGE_REQUIRED_PARAMETER_MISSING_MAX_LENGTH        | 209    | Service Parameter         | The parameter 'X' must have a defined maximum length. Please contact technical support.                                                                          |
| API_MESSAGE_UNKNOWN_PARAMETER_TYPE                       | 210    | Service Parameter         | The supplied parameter 'X' type 'Y' could not be validated.                                                                                                      |
| API_MESSAGE_NO_PARAMETERS_PROVIDED                       | 211    | Service Parameter         | No parameters were supplied.                                                                                                                                     |
| API_MESSAGE_SIGNIFICANT_EVENT_LIMIT_REACHED              | 212    | Service Parameter         | The maximum number of significant events exist for this user.                                                                                                    |
| API_MESSAGE_REQUIRED_PARAMETER_INVALID_ARRAY             | 213    | Service Parameter         | The parameter 'X' must be an array.                                                                                                                              |
| API_RESPONSE_UNHANDLED                                   | 300    | Service Not Handled       | The service 'X' is not currently supported.                                                                                                                      |
| API_RESPONSE_UNKNOWN_SERVICE                             |        |                           | 'X' is an unknown API service.                                                                                                                                   |
| API_RESPONSE_TYPE_UNHANDLED                              | 301    | Response Type Not Handled | The response type 'X' is not currently supported for the service 'Y'.                                                                                            |
