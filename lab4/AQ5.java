public class AQ5 {
   //Given the values of n and r, write a program to compute   . Constraints: write function definitions
    // for ncr(n,r)  and factorial(n), and call the factorial(n) inside ncr(n.r).

    public static int fact(int a){
        int sum=1;
        for(int i=1;i<=a;i++){
            sum=sum*i;
        }
        return sum;
    }

    public static void main(String args []){
        int n,r;
        n=4;
        r=3;
        System.out.println(fact(n)/(fact(r)*fact(n-r)));

    }
}
