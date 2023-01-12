import java.util.Arrays;

public class test {
    public static char[] stringToCharArray(String input) {
        char[] charArray = new char[findLength(input)];
        for (int i = 0; i < findLength(input); i++) {
            charArray[i] = input.charAt(i);
        }
        return charArray;
    }
public static void main(String args []){
    String input = "Hello World";
    char[] charArray = stringToCharArray(input);
    System.out.println(Arrays.toString(charArray));


}
    public static int findLength(String input) {
        int length = 0;
        for (int i = 0; input.charAt(i) != '\0'; i++) {
            length++;
        }
        return length;
    }
}
