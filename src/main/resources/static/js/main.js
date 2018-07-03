/**
 * 
 */

/*function changeProductName(val){
	console.log('changeProductName='+val);
	var shoeRelatd = ['lace','shoepolish', 'Brush','shinner'];
	var phoneRelated =['charger','case','screenGuard'];
	var clotherRelated =['tie','shirt','trouser'];
	var finalArray=[];
	switch(val){
	case 'Shoe':
		finalArray=shoeRelatd;
		break;
	case 'Phones':
		finalArray=phoneRelated;
		break;
	case 'Clothes':
		finalArray=clotherRelated;
		break;
	}
	var option = '<option selected value="No Related Products"> Please select </option>';
	for (var i=0;i<finalArray.length;i++){
		option += '<option value="'+ finalArray[i] + '">' + finalArray[i] + '</option>';
	}
	console.log('Option value='+val+' Appeneded Value ='+option);
	$('#salesRepId').html(option);
}*/

$(document).ready(function(){
	//refreshGrid();

});


function validateForm(operation){
	console.log("Document is Loaded :: validateForm");
	var returnValue=true;
	var errorStr="";
	var quantity = $('#quantity').val();
	var productid = $('#productid').val();
	var productname = $('#productname').val();
	//var salesRepId = $('#salesRepId').val();
	var error =$('#error');
	console.log('Quantity = '+quantity+' Product Id='+productid+", Product Name="+productname);
	/*$("#loading").attr("disabled","disabled").css({'cursor':'wait'});
	if(!quantity.length){
		console.log('qty is required');
		errorStr+='Quantity is required <br>';
		//error.text('');
		returnValue=false;
	}
	else{
		if(!$.isNumeric(quantity)){
			errorStr+='Quantity must be Numeric <br>';
			returnValue=false;
		}
	}
	if(!itemId.length){
		errorStr+='ItemId is required <br>';
		console.log('Item Id is required');
		returnValue=false;
	}
	if(!itemName.length){
		errorStr+='Item Name is required <br>';
		console.log('Item Name is required');
		returnValue=false;
	}
	console.log('ReturnVal'+returnValue+"--"+(returnValue==true));*/
	if(returnValue==true)
		populateTheGrid(operation,quantity,productid,productname);
	
		/*
	error.html(errorStr);
	$("#loading").attr("disabled",false).css({'cursor':'default'});*/
	
	//if(operation='updateAdd')			
			//window.location="./update-success.jsp?itemId="+itemId;
		
	return returnValue;
}
function refreshGrid(operation){
	console.log('Inside of refreshGrid')
	$.ajax({
		url: "AddProduct",
		type: "GET",
		success: function(data, textStatus, jqXHR) {
				console.log(data);
				var parsed = data;
				parsed = JSON.parse(parsed);
				if(operation=='json'){
					window.open("printJson.jsp?json="+JSON.stringify(parsed));
				$("#statusId").html('Opened JSON Data');
				}
				else{
				constructDataGrid(parsed);
				$("#statusId").html('Data Grid Refresh Success');
				}
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log("Something really bad happened " +JSON.stringify(jqXHR)+","+ textStatus +"\t"+errorThrown);

			}

	}).done(function( e ) {
		console.log( "word was saved" + e );
	});
	
}

function performOperation(operation,quantity,productid,productname){
	console.log('performOperation='+operation+',Product Id='+productid);
	if(operation=='delete'){
		$.ajax({
			url: "AddProduct",
			type: "POST",
			data:
				"operation="+operation+
				"&quantity="+quantity+
				"&itemId="+productid+
				"&itemName="+productname,

				success: function(data, textStatus, jqXHR) {
					console.log(data);
					var parsed = data;
					parsed = JSON.parse(parsed);
					//console.log("Parsed="+parsed.productJSON[0].quantity);

					constructDataGrid(parsed);


				},
				error: function(jqXHR, textStatus, errorThrown){
					console.log("Something really bad happened " + textStatus +"\n"+jqXHR.responseText);

				}

		}).done(function( e ) {
			console.log( "word was saved" + e );
		});
	}
	else if(operation=='update'){
		window.open('update.jsp?quantity='+quantity+"&productid="+productid+"&productname="+productname);
	}

}


function populateTheGrid(operation,quantity,productid,productname){
	
		console.log('Populate Grid :: operation ='+operation+","+quantity+","+productid+","+productname);
		var returnValue;
		$.ajax({
			url: "AddProduct",
			type: "POST",
			data:
				"operation="+operation+
				"&quantity="+quantity+
				"&productid="+productid+
				"&productname="+productname,
	
	
				success: function(data, textStatus, jqXHR) {
	
					console.log("Data inside of Populategrid ::success"+data);
					var parsed = data;
					//parsed = JSON.parse(parsed);
					console.log("populateTheGrid :: success"+parsed);
					if(operation=='updateAdd')
					{
						window.close();
						constructDataGrid(parsed);
					}
					else
						for (var index in data){
							$('#results').append(data[index].productName);
							console.log(data[index]);
							//constructDataGrid(data[index]);
						}
						//constructDataGrid(parsed);
	
				},
				error: function(jqXHR, textStatus, errorThrown){
					console.log("Something really bad happened " + textStatus +"\t"+jqXHR.responseText +
							'\t'+errorThrown);
	
				}
	
		}).done(function( e ) {
			console.log( "word was saved" + e );
		});
}

function constructDataGrid(parsed){
	var taggedData="<tr> " +
			"<th>Quantity</th>" +
			"<th>Item Id</th>" +
			"<th>Item Name</th>" +
			"<th>Delete </th>" +
			"<th>Update</th>" +
			"</tr>";
	$.each(parsed.productJSON,function(i, product){
		taggedData +="<tr>" +
		"<td>"+product.quantity+"</td>"+
		"<td>"+product.productid+"</td>"
		+"<td>"+product.productname+"</td>";

		taggedData +="<td class='center trashBlack' onclick=performOperation('delete','"+product.quantity+"','"+product.productid+"','"+product.productname+"')></td>" +

		"<td > <input class='center available' onclick=performOperation('update','"+product.quantity+"','"+product.productid+"','"+product.productname+"')></td>" +
		"</tr>"
	});
	$("#instructionText").html(taggedData);
	resetTheFormData();
}

function resetTheFormData(){
	$('#quantity').val('');
	$('#itemId').val('');
	$('#itemName').val('');
}