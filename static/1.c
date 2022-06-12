#include <stdio.h>
#include <string.h>

int main() {
  char str1[10] = "HELLO JI";
  char str2[10];


  strcpy(str2, str1);

  printf("%s",str2);

  return 0;
}
