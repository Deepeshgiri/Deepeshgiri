public class computer {

    public String logic(){
        String a = "print";
        String b= "cancel";
        String c = "invalid";
        person obj = new person();
        String result = obj.command();
        if (a.equals(result)){
            return a;
        }else if (b.equals(result)) {
            return b;
        }
        else return c;

    }
}
