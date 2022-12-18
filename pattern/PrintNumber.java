public class PrintNumber {

    public static void main(String args []){
        System.out.println("print 1 to 5 number in one line");

        for (int i =1; i<=5; i++){
            System.out.println("");
            for (int j =1; j<=5; j++){
                System.out.print(j);
            }
        }
        System.out.println("");

        System.out.println("print same number in one line");
        for (int i =1; i<=5; i++){
            System.out.println("");
            for (int j =1; j<=5; j++){
                System.out.print(i);
            }

        }
        System.out.println("");

        System.out.println("print same number in one line opposite");


        for (int i =5; i>=1; i--){
            System.out.println("");
            for (int j =5; j>=1; j--){
                System.out.print(i);
            }
        }

        System.out.println("");

        System.out.println("print number 1 to 25 with next line on 5th number");
                int k=1;
            for (int i =1; i<=5; i++){
                System.out.println("");
                for (int j =1; j<=5; j++){
                System.out.print(k++);
            }

        }



    }
}
