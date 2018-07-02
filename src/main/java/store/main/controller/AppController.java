package store.main.controller;

import java.util.ArrayList;


import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import store.main.model.Product;
import store.main.model.User;
import store.main.service.UserService;


@Controller
public class AppController {
	
	String operation =null;
	String quantity= null;

	String itemId = null;
	String itemName= null;
	String relatedProdId= null;	

	
	@Autowired
	private UserService userService; 
	
/*	@ModelAttribute("product")
	public Product populateProduct() {
		return new Product();
		
	}*/
	
	@RequestMapping("/check")
	public String check() {
		return "hello";
	}
	
	@RequestMapping("/welcome")
	public String welcome() {
		return "welcome";
	}
	
	@RequestMapping("/login")
	public String login(HttpServletRequest request) {
/*		request.setAttribute("user.username", "username");
		request.setAttribute("user.password", "password");*/
		return "login";
	}
	
	@RequestMapping("/Login")
	public String Login() {
		return "simplelogin";
	}
	
	@RequestMapping("/login-user")
	public String validate(@ModelAttribute User user, HttpServletRequest request) {
		

		
		if(userService.findByUsernameAndPassword(user.getUserName(),user.getPassword())) {
			return "adminHomePage";
		}
		else {
			request.setAttribute("error", "Invalid Username or Password");
			return "welcomepage";
			
		}

	}
	
	@PostMapping("/login-admin")
	public String validateAdmin(@RequestParam("username") String username,@RequestParam("password") String password, Model model) {
				
		model.addAttribute("username", username);
		User user = new User(username,password);
		System.out.println(user.getUserName());
			return "adminHomePage";
		
		

	}
	
	@RequestMapping("/dologin")
	public String dologin() {
		return "dologin";
	}
	
	@RequestMapping("/loginAdmin")
	public String verifyLogin(@RequestParam("username") String username,@RequestParam("password") String password,
			HttpSession session, ModelMap model) {
		
		session.setAttribute("username", username);
		
		if(userService.findByUsernameAndPassword(username, password)) {
			return "adminHomePage";
		}
		else
			session.setAttribute("error", "Invalid credentials");
			return "dologin";
	}
	
	
	@RequestMapping("/addProduct")
	public String addProduct() {
			return "addProduct";
	}
	
/*	@RequestMapping("/saveProduct")
	public String saveProduct(@RequestParam("productid") String productid,@RequestParam("productname") String productname,
			@ModelAttribute Product product,HttpSession session,HttpServletRequest request) {
		session.setAttribute("productid", productid);
		session.setAttribute("productname", productname);
		//product = userService.saveMyProduct(product, productid, productname);
		session.setAttribute("product", product);
		//List<Product> productList = userService.listMyProduct(product);
	//	session.setAttribute("productList", productList);
			return "adminHomePage";
	}*/
	
	@PostMapping("/AddProduct")
	public void addProduct(@RequestParam("quantity") String quantity,@RequestParam("productid") String productid,@RequestParam("productname") String productname,HttpSession session,HttpServletRequest request) {
		session.setAttribute("productid", productid);
		session.setAttribute("productname", productname);	
		session.setAttribute("quantity", quantity);
		Product product = userService.saveMyProduct(quantity, productid, productname);
		session.setAttribute("product", product);
		List<Product> productList = userService.listMyProduct(product);
		session.setAttribute("productList", productList);
		

		
	}

}
