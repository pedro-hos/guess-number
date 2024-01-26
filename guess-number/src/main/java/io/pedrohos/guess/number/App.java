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
import javafx.scene.image.ImageView;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundImage;
import javafx.scene.layout.BackgroundPosition;
import javafx.scene.layout.BackgroundRepeat;
import javafx.scene.layout.BackgroundSize;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.HBox;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.VBox;
import javafx.scene.media.Media;
import javafx.scene.media.MediaPlayer;
import javafx.scene.paint.Color;
import javafx.stage.Modality;
import javafx.stage.Stage;

/**
 * JavaFX App
 */
public class App extends Application {

	private static final String TITLE = "Luke & Mike os astro-cães";
	private static final int WIDTH = 720;
    private static final int HEIGHT = 1280;
    
	private TextField textField;
	
	private int randomNumberMin = 1;
	private int randomNumberMax = 10;
	
	private int rodada = 1;
	private int count = 1;
	private int fase = 1;
	
	private int rowStart = 1;
	private int rowMax = 2;
	
	private int columnStart = 1;
	private int columnMax = columnStart + 10;
	
	private int randomNumber = getRandomNumber(randomNumberMin, randomNumberMax);
	
	@Override
	public void start(Stage stage) throws Exception {
		
		stage.setTitle(TITLE);
		stage.setMaximized(true);
		
		Button newGame = new Button("JOGAR");
		Button credits = new Button("CRÉDITOS");
		
		credits.setOnAction(evento -> {
			createAlert(stage, "/images/creditos.gif");
		});
		
		VBox caixaVertical = new VBox();
        caixaVertical.setSpacing(5);
        caixaVertical.setAlignment(Pos.CENTER);
        
		caixaVertical.getChildren().addAll(newGame, credits);
		
		StackPane stackPane = new StackPane();
        stackPane.getChildren().addAll(caixaVertical);
        setBackgroud(stackPane, "/images/background/0.png");
        
        Scene cena = new Scene(stackPane, HEIGHT, WIDTH);
        cena.getStylesheets().add("guess-number.css");
        
        //playMusic();
        
        stage.setScene(cena);
        stage.show();
		
		newGame.setOnAction(event -> {
			createAlert(stage, "/images/fase_1.gif");
			startGame(stage);
		});

	}
	
	public void startGame(Stage stage) {
		
		GridPane gridPane = new GridPane();
		buildLines(gridPane);

		gridPane.setAlignment(Pos.CENTER);
		gridPane.setVgap(20);
		gridPane.setHgap(40);

		Button confirmBtn = new Button("CONFIRMAR");
		Button restartBtn = new Button("RECOMEÇAR");
		
		VBox vBox = new VBox();
        vBox.setSpacing(10); 
        vBox.setAlignment(Pos.CENTER);
        
        vBox.setTranslateX(10);
        vBox.setTranslateY(20);
        
        HBox hBox = new HBox();
        hBox.setSpacing(10);
        hBox.setAlignment(Pos.CENTER);

        hBox.setTranslateX(10);
        hBox.setTranslateY(20);
        
        hBox.getChildren().addAll(gridPane, confirmBtn, restartBtn);
        vBox.getChildren().addAll(gridPane, hBox);
        
        
		StackPane stackPane = new StackPane();
		stackPane.getChildren().addAll(vBox);
		
		setBackgroud(stackPane, "/images/background/1.png");
        
        restartBtn(stage, restartBtn);
        confirmBtn(stage, gridPane, confirmBtn, stackPane);
        
		Scene cena = new Scene(stackPane, HEIGHT, WIDTH);
		cena.getStylesheets().add("guess-number.css");
		stage.setScene(cena);
		stage.show();
	}
	
	

	private void restartBtn(Stage stage, Button restartBtn) {
		restartBtn.setOnAction(event -> {
        	restartValues();
        	
        	try {
				start(stage);
			} catch (Exception e) {
				e.printStackTrace();
			}
        });
	}

	private void confirmBtn(Stage stage, GridPane gridPane, Button confirmBtn, StackPane stackPane) {
		confirmBtn.setOnAction(evento -> {
			
			String guessingNumber = textField.getText();
			
			if(guessingNumber.isEmpty()) {
				
				createAlert(stage, "/images/erro.gif");
				
			} else {
				
				if (Integer.parseInt(guessingNumber) == randomNumber) {
					
					if(rodada == 10) {
						createAlert(stage, "/images/fase_final.gif");
					} else {
					
						verificaFase(stage, stackPane);
						
						rodada = rodada + 1;
						rowStart = rowStart + 1;
						rowMax = rowMax + 1;
						randomNumberMin = randomNumberMin + 10;
						randomNumberMax = randomNumberMax + 10;
						randomNumber = getRandomNumber(randomNumberMin, randomNumberMax);
						buildLines(gridPane);
					}
				} else {
					textField.setText("");
					createAlert(stage, "/images/erro.gif");
				}
			}
			
		});
	}

	private void verificaFase(Stage stage, StackPane stackPane) {
		switch (this.rodada) {
		case 1:
			this.fase = 2;
			createAlert(stage, "/images/fase_2.gif");
			setBackgroud(stackPane, "/images/background/2.png");
			break;
		case 3:
			this.fase = 3;
			createAlert(stage, "/images/fase_3.gif");
			setBackgroud(stackPane, "/images/background/3.png");
			break;
		case 7:
			this.fase = 4;
			createAlert(stage, "/images/fase_4.gif");
			setBackgroud(stackPane, "/images/background/4.png");
			break;
		default:
			break;
		}
		
	}
	
	private void playMusic() {
		String musicFile = App.class.getResource("/audio/mus.mp3").toString();
		Media sound = new Media(musicFile);
		MediaPlayer mediaPlayer = new MediaPlayer(sound);
		mediaPlayer.play();
	}

	private void setBackgroud(StackPane stackPane, String imagePath) {
		stackPane.setBackground(new Background(
                new BackgroundImage(
                        new Image(App.class.getResource(imagePath).toString()),
                        BackgroundRepeat.REPEAT, BackgroundRepeat.NO_REPEAT,
                        new BackgroundPosition(Side.LEFT, 0, true, Side.BOTTOM, 0, true),
                        new BackgroundSize(BackgroundSize.AUTO, BackgroundSize.AUTO, true, true, false, true)
                ))
        );
	}

	private void createAlert(Stage stage, String imagePath) {

		StackPane secondaryLayout = new StackPane();
		
		Image image = new Image(App.class.getResource(imagePath).toString());
		ImageView imageView = new ImageView(image);
		imageView.setPreserveRatio(true);
		secondaryLayout.getChildren().add(imageView);
		
		Scene secondScene = new Scene(secondaryLayout, 500, 500);
		
		// New window (Stage)
		Stage newWindow = new Stage();
		newWindow.setTitle(TITLE);
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
		rodada = 1;
		count = 1;
		rowStart = 1;
		rowMax = 2;
		columnStart = 1;
		columnMax = columnStart + 10;
		randomNumber = getRandomNumber(randomNumberMin, randomNumberMax);
	}

	private void buildLines(GridPane gridPane) {
		
		//gridPane.getStyleClass().add("number-label");
		
		for (var row = rowStart; row < rowMax; row++) {
			for (var colunm = columnStart; colunm < columnMax; colunm++) {
				
				if (randomNumber == count) {
					textField = new TextField();
					textField.setPrefWidth(64);
					gridPane.add(textField, colunm, row);
					
				} else {
					Label label = new Label(Integer.toString(count));
					label.setTextFill(Color.BLUEVIOLET);
					label.setCenterShape(true);
					//label.getStyleClass().add("number-label");
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