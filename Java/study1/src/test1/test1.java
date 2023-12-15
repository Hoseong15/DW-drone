package test1;

public class test1 {
  public static void main(String[] args){
    System.out.println("Hello Hoseong");
    // 변수 - 데이터타입지정
    // 데이터 종류 - 정수 , 실수 , 문자, 논리
    // 정수 - byte , short, int, long 
    byte a = 120;
    short b = 30000;
    int c = 50000;
    System.out.println(a+" "+b+" "+ c);

    //실수 - float(4byte 6자이내까지 작성할때면) , double(8byte 6자 이상)
    float 실수 = -3.14f;
    double 실수2 = 3.14f;
    System.out.println(실수);
    System.out.println(실수2);

    // 문자 - char(2byte), '' 작은따옴표는 문자를 의미, 큰따옴표는 문자열 
    char ch = 'a';
    System.out.println(ch);

    // 논리 - boolean(1byte)
    boolean bol = true;
    // void - 데이터가없다라는뜻 또는 타입이 없다라는 뜻

    // 참조타입 - new 연산자로 생성해야하는 타입
    // 클래스
    String str = new String("아하 문자열");
    String name = "이순신";
    System.out.println(str);
    System.out.println(name);
  }
  
}
