public class PQ3 {
    //Given a string (word) S, write a program to find the number of small letters,capital letters,
    // digits,and the total number of characters in S.

    public static int lengt(char[] x){
        int count =0;
        for(int i = 0; x[i]!='\0'; i++){
            count++;
        }

        return count;
    }

    public static void main(String[]args){
            int count=0,size =0;
            char [] b={'s','t','r','i','n','g','\0'};
            size=lengt(b);
            String z="helLoJ12";
            char [] y=z.toCharArray();
            for(int i=0;i<y.length;i++){
               // System.out.println(y[i]);
                char x= y[i];
                System.out.println(x);
                int v=x;
                System.out.println(v);

                if (v>=65&&v<=90) {
                    System.out.println(y[i]+" is upper case");
                } else if ( v<=122&& v>=90){
                    System.out.println(y[i]+" given is character");
                } else {
                 System.out.print(y[i]+" is lower case");
                }

            }


        }

    }

