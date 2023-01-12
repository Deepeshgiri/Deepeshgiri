public class PQ1_2 {
    //Read a character, increment the character and print the final result.
    //Use int(‘a’) to print the ascii value  of  ‘a’. Also print the ascii values for ‘A’, ‘Z’.
    //Print all the characters corresponding to numbers 33 to 125.
    // For loop can be used to solve this question.

    public static void main(String args[]){
        char a='A';
        a++;
        int b='a';
        int A='A';
        int Z ='Z';

        System.out.println(a);
        System.out.println(b);
        System.out.println(A);
        System.out.println(Z);
        for(char i=33;i<=125;i++){
            System.out.print(i);
        }
        a++;
    }
}
