package io.pedrohos.guess.number;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javafx.application.Application;
import javafx.fxml.FXML;
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
	
	@Override
	public void start(Stage palco) throws Exception { // 3

		GridPane gridPane = new GridPane();

		List<Integer> randomNumbers = getRandomNumbers(1, 10, 1);

		int count = 1;

		for (int colunm = 0; colunm < 1; colunm++) {
			for (int line = 0; line < 10; line++) {
				if (randomNumbers.contains(count)) {

					child = new TextField("?");
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
		
		botao2.setOnAction(event -> {
			System.out.println(child.getText());
		});
		
		gridPane.add(botao2, 0, count + 1);
		
		Scene cena = new Scene(gridPane, 500, 500); // 8
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