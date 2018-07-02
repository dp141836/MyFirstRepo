<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="java.util.List"%>
<%@ page import="store.main.model.Product"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<% 
List<Product> eList = (List<Product>)session.getAttribute("productList");
%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Wecome Admin </title>
 
</head>
<link rel="stylesheet" href="/resources/OM.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript" src="http://ajax.microsoft.com/ajax/jQuery.Validate/1.6/jQuery.Validate.min.js"></script>
<script type="text/javascript" src="/resources/js/main.js"></script>
<body>
<h1>Welcome ${username}</h1>
<h2> <a href="/addProduct">Add a product</a></h2>
<h3>Product Details</h3>
<hr size="4" color="gray"/>
<!-- <table>

 <c:forEach items="${eList}" var="product">
        <tr>
            <td>Product ID: <c:out value="${product.productid}"/></td>
            <td>Product Name: <c:out value="${product.productname}"/></td>  
        </tr>
  </c:forEach>
</table> -->
    <div class="container">
    	<div class="orangeText boldText padding10">Home Page: Product Management</div>                
        <div class="headerBarblock">
        	<div class="floatLeft boldText">&minus;</div>
            <div class="floatLeft paddingLeft10">Product Inventory</div>
            <div class="clear"></div>
        </div>

 <form action="" method="post"  accept-charset="utf-8"
         name="productRegistration" id="productRegistration" >
 
          <div class="headercontentblock1">                      
            <div class="container1"> 
            	 <div class="floatLeft scanner"></div>
		         <div class="boldText">Scan an product or enter information below</div>
		         
		                    <div class="floatLeft selectWidth15">
		                        <input name="quantity" id="quantity" type="text" class="inputboxBg selectWidth45" size="15" maxlength="15" placeholder="">
		                        <div class="padding10" >*Qty</div>
		                      
		                    </div>
		                    <div class="floatLeft selectWidth25">
		                        <input name="productid"  id="productid" type="text" class="inputboxBg selectWidth80" size="15" maxlength="15" placeholder="">
		                        <div class="padding10">*Product ID, UPC, SIM, or IMEI</div>
		                    </div>
		                    
		                    <div class="floatLeft selectWidth25">
		                        
		                         <label class="custom-select selectWidth90">
		                            <!--  <select onchange="changeProductName(this.value)" name="productname" id="productname"> -->
		                            <select  name="productname" id="productname">
		                                <option selected value=""> Please select Product</option>
		                                <option value="Shoe">Shoe</option>
		                                <option value="Phones">Phones </option>
		                                <option value="Clothes">Clothes</option>
		                            </select>
		                        </label>
		                         <div class="padding10">*Product Name</div>
		                    </div>

                    </div>
		                    <div class="floatLeft selectWidth15">
		                        <input type="button" id="loading" value=" Quick Add " class="greenButton"  onclick="validateForm('add')">
		                    </div> 
		         			<div class="clear"></div>
                            <div class="spacer2"></div>
                            <div class="redText" id="error">
                            </div>   
                  </div>
                  <div class="clear"></div>  
                  <div class="sharpblueBar">Added Products 
		             <button value="Refresh Grid" onclick="refreshGrid('none');return false;" class="blueButton">Refresh Grid</button>
		             
		             <button value="Get JSON Data" onclick="refreshGrid('json');return false;" class="blueButton">Get JSON Data</button>
		             <button id="statusId" disabled></button>
		          </div>
		           
		            <table id="instructionText" border=1>
		            <tr>
		            <th>Quantity</th>
		            <th>Product Id</th>
		            <th>Product Name</th>		            
		            <th>Delete </th>
		            <th>Update</th>
		            </tr>
		            </table>
		              <div class="instructionText" >
		            	</div>
		                <div class="spacer2"></div>
		            </div>                                       	                

         </form>
     </div>
</body>
</html>