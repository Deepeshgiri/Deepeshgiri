

public class Pq3 {
    //⦁	Write a program to print the following  patterns. Number of rows for each pattern is given as part of the input.
    //Pattern-1
    //* * * * *
    //* * * * *
    //* * * * *
    //* * * * *
    //* * * * *
    //Pattern-2
    //*
    //* *
    //* * *
    //* * * *
    //* * * * *
    //Pattern-3
    //* * * * *
    //* * * *
    //* * *
    //* *
    //*
    //Pattern-4
    //1
    //2 2
    //3 3 3
    //4 4 4 4
    //5 5 5 5 5

    public static void main(String args[]){
        for(int i=0;i<=5;i++){
            for(int j=0; j<=5;j++){
                System.out.print("* ");
            }
            System.out.println();
        }
        System.out.println("pattern 2");
        for(int i=1;i<=5;i++){
            for(int j=1; j<=i;j++){
                System.out.print("* ");
            }
            System.out.println();
        }
        System.out.println("pattern 3");
        for(int i=1;i<=5;i++){
            for(int j=i; j<=5;j++){
                System.out.print("* ");
            }
            System.out.println();
        }
        System.out.println("pattern 2");
        for(int i=1;i<=5;i++){
            for(int j=1; j<=i;j++){
                System.out.print(i+" ");
            }
            System.out.println();
        }

    }
}
