package io.pedrohos.guess.number;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.GridPane;
import javafx.stage.Stage;

/**
 * JavaFX App
 */
public class App extends Application {

	private TextField child;
	
	private int randomNumberMin = 1;
	private int randomNumberMax = 10;
	
	private int fase = 1;
	private int count = 1;
	
	private int colunmStart = 0;
	private int colunmMax = 1;
	
	private int lineStart = 0;
	private int lineMax = 10;
	
	@Override
	public void start(Stage palco) throws Exception { // 3

		GridPane gridPane = new GridPane();

		int randomNumber = getRandomNumber(randomNumberMin, randomNumberMax);
		
		for (int colunm = colunmStart; colunm < colunmMax; colunm++) {
			for (int line = lineStart; line < lineMax; line++) {
				
				if (randomNumber == count) {
					child = new TextField("...");
					gridPane.add(child, line, colunm);
					
				} else {
					gridPane.add(new Label(count + ""), line, colunm);
				}
				count++;
			}
		}

		// 2
		gridPane.setVgap(20);
		gridPane.setHgap(20);

		Button botao2 = new Button("Clique em mim!");
		gridPane.add(botao2, 0, 10);
		
		botao2.setOnAction(new EventHandler<ActionEvent>() {

            public void handle(ActionEvent evento) {
               
            	Integer numberGuess = Integer.parseInt(child.getText());
            	
            	if (numberGuess == randomNumber) {
            	
	            	fase = fase + 1;
	            	colunmStart = colunmStart + 1;
	            	colunmMax = colunmMax + 1;
	            	randomNumberMin = randomNumberMin + 10;
	            	randomNumberMax = randomNumberMax + 10;
	            	
	            	int randomNumber = getRandomNumber(randomNumberMin, randomNumberMax);
	            	
	            	
	            	
	            	for (int colunm = colunmStart; colunm < colunmMax; colunm++) {
	        			for (int line = lineStart; line < lineMax; line++) {
	        				if (randomNumber == count) {
	        					child = new TextField("...");
	        					gridPane.add(child, line, colunm);
	
	        				} else {
	        					gridPane.add(new Label(count + ""), line, colunm);
	        				}
	        				count++;
	        			}
	        		}
	            	
	            } else { 
	            	gridPane.add(new Label("ERRRRRROOOOUUUUU!!!!!"), 0, colunmMax);
	            }
            	
            }
        });
		
		
		Scene cena = new Scene(gridPane, 600, 800); // 8
		palco.setTitle("Qual o número?..."); // 9
		palco.setScene(cena); // 10
		palco.show(); // 11

	}

	public List<Integer> getRandomNumbers(int min, int max, int qnt) {

		List<Integer> numbers = new ArrayList<>();

		while (qnt != 0) {
			numbers.add(getRandomNumber(min, max));
			qnt--;
		}

		return numbers;
	}

	public int getRandomNumber(int min, int max) {
		Random random = new Random();
		return random.ints(min, max).findFirst().getAsInt();
	}

	public static void main(String[] args) {
		launch();
	}

}