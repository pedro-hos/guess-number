package io.pedrohos.guess.number;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javafx.application.Application;
import javafx.geometry.Pos;
import javafx.geometry.Side;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.image.Image;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundImage;
import javafx.scene.layout.BackgroundPosition;
import javafx.scene.layout.BackgroundRepeat;
import javafx.scene.layout.BackgroundSize;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.HBox;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.VBox;
import javafx.scene.paint.Color;
import javafx.stage.Modality;
import javafx.stage.Stage;

/**
 * JavaFX App
 */
public class App extends Application {

	private static final int WIDTH = 1000;
    private static final int HEIGHT = 1000;
    
	private TextField textField;
	
	private int randomNumberMin = 1;
	private int randomNumberMax = 10;
	
	private int fase = 1;
	private int count = 1;
	
	private int rowStart = 1;
	private int rowMax = 2;
	
	private int columnStart = 1;
	private int columnMax = columnStart + 10;
	
	private int randomNumber = getRandomNumber(randomNumberMin, randomNumberMax);
	
	@Override
	public void start(Stage stage) throws Exception {

		GridPane gridPane = new GridPane();
		buildLines(gridPane);

		gridPane.setVgap(30);
		gridPane.setHgap(50);

		Button confirmBtn = new Button("Confirmar");
		Button restartBtn = new Button("Recomeçar");
		
		StackPane stackPane = new StackPane();
		stackPane.setBackground(new Background(
                new BackgroundImage(
                        new Image(getClass().getResource("/images/graveyard.png").toString()),
                        BackgroundRepeat.REPEAT, BackgroundRepeat.NO_REPEAT,
                        new BackgroundPosition(Side.LEFT, 0, true, Side.BOTTOM, 0, true),
                        new BackgroundSize(BackgroundSize.AUTO, BackgroundSize.AUTO, true, true, false, true)
                ))
        );
		
		VBox vBox = new VBox();
        vBox.setSpacing(5); 
        vBox.setAlignment(Pos.TOP_CENTER); 
        
        vBox.setTranslateX(10);
        vBox.setTranslateY(20);
        
        HBox hBox = new HBox();
        hBox.setSpacing(5);
        hBox.setAlignment(Pos.CENTER);

        hBox.setTranslateX(10);
        hBox.setTranslateY(20);
        
        hBox.getChildren().addAll(confirmBtn, restartBtn);
        
        vBox.getChildren().addAll(title("Adivinhe o número!"), gridPane, hBox);
        
        stackPane.getChildren().add(vBox);
        
        restartBtn.setOnAction(event -> {
        	restartValues();
        	
        	try {
				start(stage);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
        });
        
        confirmBtn.setOnAction(evento -> {
			
			Integer numberGuess = Integer.parseInt(textField.getText());
			
			if (numberGuess == randomNumber) {
				
				if(fase == 10) {
					buildSucessBox(stage);
				} else {
				
					fase = fase + 1;
					rowStart = rowStart + 1;
					rowMax = rowMax + 1;
					randomNumberMin = randomNumberMin + 10;
					randomNumberMax = randomNumberMax + 10;
					randomNumber = getRandomNumber(randomNumberMin, randomNumberMax);
					
					buildLines(gridPane);
				}
			} else { 
				System.out.println("ERROU....");
			}
			
		});
        
        Scene cena = new Scene(stackPane, HEIGHT, WIDTH);
		cena.getStylesheets().add("guess-number.css");
		stage.setTitle("Qual o número?...");
		stage.setScene(cena);
		stage.show();

	}

	private void buildSucessBox(Stage stage) {
		
		Label secondLabel = new Label("Parabéns! Você concluiu!");

		StackPane secondaryLayout = new StackPane();
		secondaryLayout.getChildren().add(secondLabel);

		Scene secondScene = new Scene(secondaryLayout, 230, 100);
		
		 // New window (Stage)
		Stage newWindow = new Stage();
		newWindow.setTitle("Second Stage");
		newWindow.setScene(secondScene);

		// Specifies the modality for new window.
		newWindow.initModality(Modality.WINDOW_MODAL);

		// Specifies the owner Window (parent) for new window
		newWindow.initOwner(stage);

		// Set position of second window, related to primary window.
		newWindow.setX(stage.getX() + 200);
		newWindow.setY(stage.getY() + 100);

		newWindow.show();
	}

	private void restartValues() {
		textField = null;
		
		randomNumberMin = 1;
		randomNumberMax = 10;
		
		fase = 1;
		count = 1;
		
		rowStart = 1;
		rowMax = 2;
		
		columnStart = 1;
		columnMax = columnStart + 10;
		
		randomNumber = getRandomNumber(randomNumberMin, randomNumberMax);
	}
	
	private Label title(String name) {
            var newLblTitle = new Label(name);
            newLblTitle.setTextFill(Color.WHITE);
            return newLblTitle;
	}

	private void buildLines(GridPane gridPane) {
		
		for (int row = rowStart; row < rowMax; row++) {
			for (int colunm = columnStart; colunm < columnMax; colunm++) {
				
				if (randomNumber == count) {
					textField = new TextField();
					textField.setPrefWidth(50);
					gridPane.add(textField, colunm, row);
					
				} else {
					Label label = new Label(count + "");
					label.setTextFill(Color.WHITE);
					gridPane.add(label, colunm, row);
				}
				
				count++;
			}
		}
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