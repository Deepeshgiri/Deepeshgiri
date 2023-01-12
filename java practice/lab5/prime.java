import java.util.Scanner;

public class prime
{
    public static void prime(int n)
    {
        boolean isPrime=true;
        for(int j=2;j<=n;j++){
            isPrime=true;
            for(int i=2;i<=j/2;i++){
                if(j%i==0){
                    isPrime=false;
                    break;
                }

            }
            if(isPrime){
                System.out.println(j);
                isPrime=true;
            }
        }
    }
    public static void main(String arg[])
    {
        Scanner s=new Scanner(System.in);
        int n=s.nextInt();
        prime(n);
    }
}
