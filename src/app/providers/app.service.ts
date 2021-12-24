import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root',
})
export class AppService {
  start: number = 0;
  end: number = 48;
  actual: number = this.start;
  pause: boolean;
  max_value: boolean;
  caja_texto_slide_2: string;
  caja_texto_slide_8: string;
  caja_texto_slide_44: string;
  caja_texto_slide_45: string;
  caja_texto_slide_46: string;
  width_mobile:any;
  constructor() {
    this.width_mobile = window.innerWidth;
    console.log(this.width_mobile)
  }

  nextSlide(step) {
    switch (step) {
      case 2:
        if ($('#caja_texto_slide_2').val() != '') {
          if ($('#caja_texto_slide_2').val().length > 1000) {
            this.pause = true;
            this.max_value = true;
            $('#modal_campo_vacio').modal('toggle');
          } else {
            this.caja_texto_slide_2 = $('#caja_texto_slide_2').val();
            this.pause = false;
            this.max_value = false;
            $('#modal_campo_vacio').modal('toggle');
            this.actual >= 0 && this.actual <= this.end
              ? (this.actual += 1)
              : false;
          }
        } else {
          this.pause = true;
          $('#modal_campo_vacio').modal('toggle');
        }
        break;
      case 8:
        if ($('#caja_texto_slide_8').val() != '') {
          if ($('#caja_texto_slide_8').val().length > 1000) {
            this.pause = true;
            this.max_value = true;
            $('#modal_campo_vacio').modal('toggle');
          } else {
            this.caja_texto_slide_8 = $('#caja_texto_slide_8').val();
            this.pause = false;
            this.max_value = false;
            $('#modal_campo_vacio').modal('toggle');
            this.actual >= 0 && this.actual <= this.end
              ? (this.actual += 1)
              : false;
          }
        } else {
          this.pause = true;
          $('#modal_campo_vacio').modal('toggle');
        }
        break;
      case 10:
        if (
          $('input[name=form-question1]').is(':checked') &&
          $('input[name=form-question2]').is(':checked')
        ) {
          this.pause = false;
          this.max_value = false;
          $('#modal_campo_vacio').modal('toggle');
          this.actual >= 0 && this.actual <= this.end
            ? (this.actual += 1)
            : false;
        } else {
          this.pause = true;
          $('#modal_campo_vacio').modal('toggle');
        }
        break;
      case 15:
        if ($('input[name=form-question15]').is(':checked')) {
          this.pause = false;
          this.max_value = false;
          $('#modal_campo_vacio').modal('toggle');
          this.actual >= 0 && this.actual <= this.end
            ? (this.actual += 1)
            : false;
        } else {
          this.pause = true;
          $('#modal_campo_vacio').modal('toggle');
        }
        break;
      case 21:
        if ($('input[name=form-question21]').is(':checked')) {
          this.pause = false;
          this.max_value = false;
          $('#modal_campo_vacio').modal('toggle');
          this.actual >= 0 && this.actual <= this.end
            ? (this.actual += 1)
            : false;
        } else {
          this.pause = true;
          $('#modal_campo_vacio').modal('toggle');
        }
        break;
      case 23:
        if ($('input[name=form-question23]').is(':checked')) {
          this.pause = false;
          this.max_value = false;
          $('#modal_campo_vacio').modal('toggle');
          this.actual >= 0 && this.actual <= this.end
            ? (this.actual += 1)
            : false;
        } else {
          this.pause = true;
          $('#modal_campo_vacio').modal('toggle');
        }
        break;
      case 25:
        if ($('input[name=form-question25]').is(':checked')) {
          this.pause = false;
          this.max_value = false;
          $('#modal_campo_vacio').modal('toggle');
          this.actual >= 0 && this.actual <= this.end
            ? (this.actual += 1)
            : false;
        } else {
          this.pause = true;
          $('#modal_campo_vacio').modal('toggle');
        }
        break;
      case 27:
        if ($('input[name=form-question27]').is(':checked')) {
          this.pause = false;
          this.max_value = false;
          $('#modal_campo_vacio').modal('toggle');
          this.actual >= 0 && this.actual <= this.end
            ? (this.actual += 1)
            : false;
        } else {
          this.pause = true;
          $('#modal_campo_vacio').modal('toggle');
        }
        break;
      case 32:
        if ($('input[name=form-question32]').is(':checked')) {
          this.pause = false;
          this.max_value = false;
          $('#modal_campo_vacio').modal('toggle');
          this.actual >= 0 && this.actual <= this.end
            ? (this.actual += 1)
            : false;
        } else {
          this.pause = true;
          $('#modal_campo_vacio').modal('toggle');
        }
        break;
      case 34:
        if ($('input[name=form-question34]').is(':checked')) {
          this.pause = false;
          this.max_value = false;
          $('#modal_campo_vacio').modal('toggle');
          this.actual >= 0 && this.actual <= this.end
            ? (this.actual += 1)
            : false;
        } else {
          this.pause = true;
          $('#modal_campo_vacio').modal('toggle');
        }
        break;
      case 36:
        if ($('input[name=form-question36]').is(':checked')) {
          this.pause = false;
          this.max_value = false;
          $('#modal_campo_vacio').modal('toggle');
          this.actual >= 0 && this.actual <= this.end
            ? (this.actual += 1)
            : false;
        } else {
          this.pause = true;
          $('#modal_campo_vacio').modal('toggle');
        }
        break;
      case 38:
        if ($('input[name=form-question38]').is(':checked')) {
          this.pause = false;
          this.max_value = false;
          $('#modal_campo_vacio').modal('toggle');
          this.actual >= 0 && this.actual <= this.end
            ? (this.actual += 1)
            : false;
        } else {
          this.pause = true;
          $('#modal_campo_vacio').modal('toggle');
        }
        break;
      case 40:
        if ($('input[name=form-question40]').is(':checked')) {
          this.pause = false;
          this.max_value = false;
          $('#modal_campo_vacio').modal('toggle');
          this.actual >= 0 && this.actual <= this.end
            ? (this.actual += 1)
            : false;
        } else {
          this.pause = true;
          $('#modal_campo_vacio').modal('toggle');
        }
        break;
      case 42:
        if ($('input[name=form-question42]').is(':checked')) {
          this.pause = false;
          this.max_value = false;
          $('#modal_campo_vacio').modal('toggle');
          this.actual >= 0 && this.actual <= this.end
            ? (this.actual += 1)
            : false;
        } else {
          this.pause = true;
          $('#modal_campo_vacio').modal('toggle');
        }
        break;
      case 44:
        if ($('#caja_texto_slide_44').val() != '') {
          if ($('#caja_texto_slide_44').val().length > 1000) {
            this.pause = true;
            this.max_value = true;
            $('#modal_campo_vacio').modal('toggle');
          } else {
            this.caja_texto_slide_44 = $('#caja_texto_slide_44').val();
            this.pause = false;
            this.max_value = false;
            $('#modal_campo_vacio').modal('toggle');
            this.actual >= 0 && this.actual <= this.end
              ? (this.actual += 1)
              : false;
          }
        } else {
          this.pause = true;
          $('#modal_campo_vacio').modal('toggle');
        }
        break;
      case 45:
        if ($('#caja_texto_slide_45').val() != '') {
          if ($('#caja_texto_slide_45').val().length > 1000) {
            this.pause = true;
            this.max_value = true;
            $('#modal_campo_vacio').modal('toggle');
          } else {
            this.caja_texto_slide_45 = $('#caja_texto_slide_45').val();
            this.pause = false;
            this.max_value = false;
            $('#modal_campo_vacio').modal('toggle');
            this.actual >= 0 && this.actual <= this.end
              ? (this.actual += 1)
              : false;
          }
        } else {
          this.pause = true;
          $('#modal_campo_vacio').modal('toggle');
        }
        break;
      case 46:
        if ($('#caja_texto_slide_46').val() != '') {
          if ($('#caja_texto_slide_46').val().length > 1000) {
            this.pause = true;
            this.max_value = true;
            $('#modal_campo_vacio').modal('toggle');
          } else {
            this.caja_texto_slide_46 = $('#caja_texto_slide_46').val();
            this.pause = false;
            this.max_value = false;
            $('#modal_campo_vacio').modal('toggle');
            this.actual >= 0 && this.actual <= this.end
              ? (this.actual += 1)
              : false;
          }
        } else {
          this.pause = true;
          $('#modal_campo_vacio').modal('toggle');
        }
        break;
      default:
        this.actual >= 0 && this.actual <= this.end
          ? (this.actual += 1)
          : false;
        break;
    }
    $(window).scrollTop(0);
  }
  beforeSlide(step) {
    this.actual > 0 && this.actual <= this.end ? (this.actual -= 1) : false;
    $(window).scrollTop(0);
  }
  resetPPT() {
    window.location.reload();
  }
}
