package store.main.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import store.main.model.Product;
import store.main.model.User;
import store.main.util.UserPropertyValues;

@Service
public class UserService {
	//@Autowired
	 List<Product> list;
	
	public boolean findByUsernameAndPassword(String username, String password) {
		System.out.println("Username:"+username);
		System.out.println("password:"+password);
		
		return new UserPropertyValues().validateUser(new User(username,password));
		
		
		/*if ((username.equalsIgnoreCase("Amrita") && password.equals("amrita123")) ||
				(username.equalsIgnoreCase("Amy") && password.equals("Amy123")))
		return true;
		else 
			return false;*/
		
		//return true;
		
	}
	
	public Product saveMyProduct(String quantity, String productid, String productname) {
		Product product = new Product();
		product.setProductId(productid);
		product.setProductName(productname);
		product.setQuantity(quantity);
		return product;
	}
	
	public List<Product> listMyProduct(Product product) {
		if(list == null) {
			list = new ArrayList<Product>();
		}
		list.add(product);		
		return list;
	}
	
	public List<Product> removeProduct(Product product) {
		if(list == null) {
			list = new ArrayList<Product>();
		}
		ListIterator<Product> iterator = list.listIterator();
		while(iterator.hasNext()) {
			if(iterator.next().areSameProduct(product)) {
				iterator.remove();
				break;
			}
		}
		return list;
	}
}
