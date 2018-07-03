package store.main.model;



public class Product {
	
	private String productid;
	private String productname;

	private String quantity;
	
	public Product(){
		
	}
	
   public  Product(String productId,String productName,String quantity){
	   super();
	this.productid = productId;
	this.productname = productName;
	this.quantity = quantity;
		
	}

		public String getProductId() {
			return productid;
		}
		
		public void setProductId(String productId) {
			this.productid = productId;
		}
		
		public String getProductName() {
			return productname;
		}
		
		public void setProductName(String productName) {
			this.productname = productName;
		}
			
		public String getQuantity() {
			return quantity;
		}

		public void setQuantity(String quantity) {
			this.quantity = quantity;
		}

		public boolean areSameProduct(Product prodct) {
			if(prodct!= null && this.productid.equals(prodct.productid) && this.productname.equals(prodct.productname) && this.quantity.equals(prodct.quantity)) {
				return true;
			}
			else {
				return false;
			}
			
		}

}
