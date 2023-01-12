import java.util.Scanner;

public class PQ1 {
    //Given an array A of n integers, write a function to remove the last digit from each element in A.
    //void removeLastDigit(int A[], int low, int high)

    public static int[] arrayfill(int []a){
        System.out.println();
        Scanner sc= new Scanner(System.in);
        for(int i=0;i<a.length;i++){
            System.out.println("enter next value in array");
            a[i]=sc.nextInt();
        }return a;
    }
    public static int [] removeLastDigit(int a[], int low, int high){
        for(int i=low;i<high;i++){
            a[i]=a[i]/10;
        }
        return a;
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        System.out.println(" enter the value of array");
        int n= sc.nextInt();
        int A[]=new int[n];
        arrayfill(A);
        for(int i=0;i< A.length;i++){
            System.out.print(A[i]+" ");
        }
        System.out.println("remove last digit from each number");
        removeLastDigit(A, 2,5);
        for(int i=0;i< A.length;i++){
            System.out.print(A[i]+" ");
        }

    }
}
