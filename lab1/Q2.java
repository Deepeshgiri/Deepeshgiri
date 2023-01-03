public class Q2
{
    public static void main(String args[]){

        // Given a number n, write a program to find out whether the given number is a
        //multiple of 5 or not, without using the mod (reminder %) operator.
        int n= 27;
    for(int i=0;i<=n;i++){
        n=n-5;    }
    if(n==0)
    {
        System.out.println("divisible by 5");
    }else
        System.out.println("not divisible by 5");
    }
}
